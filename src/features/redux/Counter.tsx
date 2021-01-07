/* Core */
import { useSelector, useDispatch } from 'react-redux';

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
            <h1>Count: {count}</h1>
            <button onClick = { increment }>+1</button>
            <button onClick = { decrement }>-1</button>
            <button onClick = { reset }>Reset</button>
        </div>
    );
};
