/* Core */
import styled from 'styled-components';

export const Link = styled.a`
    color: ${props => (props.$isActive ? 'var(--color-4)' : 'var(--color-2)')};
    cursor: pointer;
    transition: color 0.1s ease;

    &:hover {
        color: var(--color-5);
    }
`;
