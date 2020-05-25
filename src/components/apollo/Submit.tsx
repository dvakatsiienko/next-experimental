import { allPostsQueryVars } from './PostList';

/* Instruments */
import * as gql from '@/graphql';

export default function Submit() {
    const [ createPost, { loading }] = gql.useCreatePostMutation();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const formData = new window.FormData(form);
        const title = formData.get('title');
        const url = formData.get('url');
        form.reset();

        createPost({
            variables: { title, url },
            update:    (cache, { data: { createPost } }) => {
                const data = cache.readQuery<gql.AllPostsQuery>({
                    query:     gql.AllPostsDocument,
                    variables: allPostsQueryVars,
                });

                cache.writeQuery<gql.AllPostsQuery>({
                    query: gql.AllPostsDocument,
                    data:  {
                        ...data,
                        allPosts: [ createPost, ...data.allPosts ],
                    },
                    variables: allPostsQueryVars,
                });
            },
        });
    };

    return (
        <form onSubmit = { handleSubmit }>
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
}
