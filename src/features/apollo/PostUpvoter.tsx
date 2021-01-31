/* Core */
import styled from 'styled-components';

/* Instruments */
import * as gql from '@/graphql';

import { UnorderedList, ListItem, Link, Button } from '@/components/styled';

export const PostUpVoter: React.FC<PostUpVoterProps> = props => {
    const [ votePostMutation ] = gql.useVotePostMutation();

    const votePost = () => {
        votePostMutation({ variables: { id: props.id } });
    };

    return <Button onClick = { votePost }>{props.votes}</Button>;
};

/* Types */
interface PostUpVoterProps {
    votes: number;
    id: string;
}
