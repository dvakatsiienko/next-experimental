/* Instruments */
import * as gql from '@/graphql';

export const PostUpvoter: React.FC<PostUpvoterProps> = ({ votes, id }) => {
    const [ votePostMutation ] = gql.useVotePostMutation();

    const votePost = () => {
        votePostMutation({ variables: { id } });
    };

    return (
        <button onClick = { votePost }>
            {votes}

            <style jsx>
                {`
                    button {
                        background-color: transparent;
                        border: 1px solid #e4e4e4;
                        color: #000;
                    }

                    button:active {
                        background-color: transparent;
                    }

                    button:before {
                        align-self: center;
                        border-color: transparent transparent #000000
                            transparent;
                        border-style: solid;
                        border-width: 0 4px 6px 4px;
                        content: '';
                        height: 0;
                        margin-right: 5px;
                        width: 0;
                    }
                `}
            </style>
        </button>
    );
};

/* Types */
interface PostUpvoterProps {
    votes: number;
    id: string;
}
