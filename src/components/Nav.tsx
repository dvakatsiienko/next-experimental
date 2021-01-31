/* Core */
import NextLink from 'next/link';

/* Components */
import { H1, UnorderedList, ListItem, Link } from '@/components/styled';

export const Nav: React.FC<NavProps> = props => {
    return (
        <>
            <nav>
                <UnorderedList>
                    <ListItem>
                        <NextLink href = '/'>
                            <Link>Home</Link>
                        </NextLink>
                    </ListItem>
                    <ListItem>
                        <NextLink href = '/redux'>
                            <Link>Redux</Link>
                        </NextLink>
                    </ListItem>
                    <ListItem>
                        <NextLink href = '/apollo-ssr'>
                            <Link>Apollo SSR</Link>
                        </NextLink>
                    </ListItem>
                    <ListItem>
                        <NextLink href = '/apollo-ssg'>
                            <Link>Apollo SSG</Link>
                        </NextLink>
                    </ListItem>
                    <ListItem>
                        <NextLink href = '/apollo-redux'>
                            <Link>Apollo Redux</Link>
                        </NextLink>
                    </ListItem>
                    <ListItem>
                        <NextLink href = '/apollo-redux-ssr'>
                            <Link>Apollo Redux SSR</Link>
                        </NextLink>
                    </ListItem>
                    <ListItem>
                        <NextLink href = '/about'>
                            <Link>About</Link>
                        </NextLink>
                    </ListItem>
                </UnorderedList>
            </nav>
            <hr />

            <H1>{props.title}</H1>
        </>
    );
};

/* Types */
interface NavProps {
    title: string;
}
