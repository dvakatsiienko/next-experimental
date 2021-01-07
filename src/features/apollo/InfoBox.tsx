/* Core */
import styled from 'styled-components';

export const InfoBox: React.FC = props => (
    <Container>{props.children}</Container>
);

/* Styles */
const Container = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-top: 1px solid #ececec;
    border-bottom: 1px solid #ececec;
`;
