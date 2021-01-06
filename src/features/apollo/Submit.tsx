/* Core */
import { gql as tag } from '@apollo/client';

/* Instruments */
import * as gql from '@/graphql';

export const Submit: React.FC = () => {
    const [ createPost, { loading }] = gql.useCreatePostMutation();

    const submitForm = event => {
        event.preventDefault();

        const form = event.target;
        const formData = new window.FormData(form);
        const title = formData.get('title') as string;
        const url = formData.get('url') as string;
        form.reset();

        createPost({
            variables: { title, url },
            update:    (cache, { data: { createPost } }) => {
                cache.modify({
                    fields: {
                        allPosts(existingPosts = []) {
                            const newPostRef = cache.writeFragment({
                                data:     createPost,
                                fragment: tag`
                                    fragment NewPost on allPosts {
                                        id
                                        type
                                    }
                                `,
                            });

                            return [ newPostRef, ...existingPosts ];
                        },
                    },
                });
            },
        });
    };

    return (
        <form onSubmit = { submitForm }>
            <h1>Submit</h1>
            <input
                required name = 'title' placeholder = 'title'
                type = 'text'
            />
            <input
                required name = 'url' placeholder = 'url'
                type = 'url'
            />
            <button disabled = { loading } type = 'submit'>
                Submit
            </button>

            <style jsx>
                {`
                    form {
                        border-bottom: 1px solid #ececec;
                        padding-bottom: 20px;
                        margin-bottom: 20px;
                    }

                    h1 {
                        font-size: 20px;
                    }

                    input {
                        display: block;
                        margin-bottom: 10px;
                    }
                `}
            </style>
        </form>
    );
};
