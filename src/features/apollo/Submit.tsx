/* Core */
import { gql as tag } from '@apollo/client';
import styled from 'styled-components';

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
        <Form onSubmit = { submitForm }>
            <Title>Create Post</Title>
            <Field
                required name = 'title' placeholder = 'title'
                type = 'text'
            />
            <Field
                required name = 'url' placeholder = 'url'
                type = 'url'
            />
            <button disabled = { loading } type = 'submit'>
                Submit
            </button>
        </Form>
    );
};

/* Styles */
const Form = styled.form`
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ececec;
`;
const Title = styled.h1`
    font-size: 20px;
`;
const Field = styled.input`
    display: block;
    margin-bottom: 10px;
`;
