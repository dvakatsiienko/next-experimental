/* Core */
import Link from 'next/link';

export const Nav: React.FC = () => {
    return (
        <nav>
            <Link href="/index">
                <a>Index</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
        </nav>
    );
};
