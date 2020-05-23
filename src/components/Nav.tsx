/* Core */
import Link from 'next/link';
import styled from 'styled-components';

export const Nav: React.FC = () => {
    return (
        <nav>
            <Link href="/index">
                <StyledLink>Index</StyledLink>
            </Link>
            <Link href="/about">
                <StyledLink>About</StyledLink>
            </Link>
            <Link href="/material-1">
                <StyledLink>Material 1 </StyledLink>
            </Link>
            <Link href="/material-2">
                <StyledLink>Material 2</StyledLink>
            </Link>
        </nav>
    );
};

const StyledLink = styled.a`
    margin-right: 5px;
    font-size: 18px;
    color: rebeccapurple;
    cursor: pointer;
`;
