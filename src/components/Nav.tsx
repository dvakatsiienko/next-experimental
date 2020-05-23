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
            <Link href="/apollo-ssr">
                <StyledLink>Apollo SSR</StyledLink>
            </Link>
            <Link href="/apollo-ssg">
                <StyledLink>Apollo SSG</StyledLink>
            </Link>
            <Link href="/apollo-info">
                <StyledLink>Apollo info</StyledLink>
            </Link>
        </nav>
    );
};

const StyledLink = styled.a`
    margin-right: 7px;
    font-family: roboto mono;
    font-size: 20px;
    font-weight: 700;
    color: palevioletred;
    cursor: pointer;

    &:hover {
        color: rebeccapurple;
    }
`;
