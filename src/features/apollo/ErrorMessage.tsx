export const ErrorMessage: React.FC<ErrorMessageProps> = props => {
    return (
        <aside>
            {props.message}

            <style jsx>
                {`
                    aside {
                        padding: 1.5em;
                        font-size: 14px;
                        color: white;
                        background-color: red;
                    }
                `}
            </style>
        </aside>
    );
};

/* Types */
interface ErrorMessageProps {
    message: string;
}
