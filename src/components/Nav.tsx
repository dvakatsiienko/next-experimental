/* Core */
import Link from 'next/link';
import styled from 'styled-components';

export const Nav: React.FC<NavProps> = props => {
    return (
        <>
            <nav>
                <Link href = '/'>
                    <StyledLink>Home</StyledLink>
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
                &nbsp;|&nbsp;
                <Link href = '/about'>
                    <StyledLink>About</StyledLink>
                </Link>
            </nav>
            <hr />
            <H1>{props.title}</H1>
        </>
    );
};

/* Styles */
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

const H1 = styled.h1`
    font-size: 42px;
    color: ${props => props.theme.color2};
`;

/* Types */
interface NavProps {
    title: string;
}
