/* Core */
import styled from 'styled-components';

/* Instruments */
import * as gql from '@/graphql';

export const PostUpVoter: React.FC<PostUpVoterProps> = props => {
    const [ votePostMutation ] = gql.useVotePostMutation();

    const votePost = () => {
        votePostMutation({ variables: { id: props.id } });
    };

    return <UpVoteButton onClick = { votePost }>{props.votes}</UpVoteButton>;
};

/* Styles */
const UpVoteButton = styled.button`
    color: #000;
    background-color: transparent;
    border: 1px solid #e4e4e4;

    &:active {
        background-color: transparent;
    }

    &:before {
        align-self: center;
        width: 0;
        height: 0;
        margin-right: 5px;
        content: '';
        border-color: transparent transparent #000000 transparent;
        border-style: solid;
        border-width: 0 4px 6px 4px;
    }
`;

/* Types */
interface PostUpVoterProps {
    votes: number;
    id: string;
}
