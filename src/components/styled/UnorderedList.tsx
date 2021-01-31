/* Core */
import styled from 'styled-components';

export const UnorderedList = styled.ul<UnorderedListProps>`
    display: flex;
    flex-direction: ${props => props['$flex-direction']};
    padding: 0;
    margin-top: 24px;
    margin-bottom: 24px;
`;
UnorderedList.defaultProps = {
    '$flex-direction': 'row',
};

/* Types */
interface UnorderedListProps {
    '$flex-direction'?: 'row' | 'column';
}
