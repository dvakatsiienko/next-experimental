/* Core */
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

/* Components */
import { H6, Button } from '@/components/styled';

/* Instruments */
import { State } from '@/lib/redux';

export const Counter = () => {
    const count = useSelector((state: State) => state.count);

    const dispatch = useDispatch();

    const increment = () =>
        dispatch({
            type: 'INCREMENT',
        });

    const decrement = () =>
        dispatch({
            type: 'DECREMENT',
        });

    const reset = () =>
        dispatch({
            type: 'RESET',
        });

    return (
        <div>
            <H6>Count: {count}</H6>

            <ControlsContainer>
                <Button onClick = { increment }>+1</Button>
                <Button onClick = { decrement }>-1</Button>
                <Button onClick = { reset }>Reset</Button>
            </ControlsContainer>
        </div>
    );
};

/* Styles */
const ControlsContainer = styled.div`
    button:not(:last-child) {
        margin-right: 10px;
    }
`;
