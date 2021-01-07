/* Core */
import { useSelector, shallowEqual } from 'react-redux';
import styled from 'styled-components';

/* Instruments */
import { State } from '@/lib/redux';

export const Clock = () => {
    const { lastUpdate, light } = useSelector(
        (state: State) => ({
            lastUpdate: state.lastUpdate,
            light:      state.light,
        }),
        shallowEqual,
    );

    return (
        <Container $light = { light ? true : false }>
            {formatTime(lastUpdate)}
        </Container>
    );
};

/* Styles */
interface ContainerProps {
    $light: boolean;
}
const Container = styled.div<ContainerProps>`
    display: inline-block;
    padding: 15px;
    margin-top: 15px;
    font: 50px menlo, monaco, monospace;
    color: #82fa58;
    background-color: ${props => props.$light ? '#999' : '#000'};
`;

/* Helpers */
function formatTime(time) {
    // cut off except hh:mm:ss
    return new Date(time).toJSON().slice(11, 19);
}
