/* Core */
import Link from 'next/link';
import styled from 'styled-components';

export const Nav: React.FC = () => {
    return (
        <>
            <nav>
                <Link href = '/'>
                    <StyledLink>Index</StyledLink>
                </Link>
                &nbsp;|&nbsp;
                <Link href = '/about'>
                    <StyledLink>About</StyledLink>
                </Link>
                &nbsp;|&nbsp;
                <Link href = '/redux'>
                    <StyledLink>Redux</StyledLink>
                </Link>
                &nbsp;|&nbsp;
                <Link href = '/apollo-ssr'>
                    <StyledLink>Apollo SSR</StyledLink>
                </Link>
                &nbsp;|&nbsp;
                <Link href = '/apollo-ssg'>
                    <StyledLink>Apollo SSG</StyledLink>
                </Link>
                &nbsp;|&nbsp;
                <Link href = '/apollo-redux'>
                    <StyledLink>Apollo Redux</StyledLink>
                </Link>
                &nbsp;|&nbsp;
                <Link href = '/apollo-redux-ssr'>
                    <StyledLink>Apollo Redux SSR</StyledLink>
                </Link>
            </nav>
            <hr />
        </>
    );
};

const StyledLink = styled.a`
    font-family: roboto mono, system-ui;
    font-size: 20px;
    font-weight: 700;
    color: ${props => props.theme.color1};
    cursor: pointer;

    &:hover {
        color: rebeccapurple;
    }
`;
