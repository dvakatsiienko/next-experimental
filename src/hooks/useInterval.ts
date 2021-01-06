/* Core */
import { useEffect, useRef } from 'react';

export const useInterval = (callback, delay: number) => {
    const savedCallback = useRef();
    useEffect(() => {
        savedCallback.current = callback;
    }, [ callback ]);

    useEffect(() => {
        // @ts-ignore
        const handler = (...args) => savedCallback.current(...args);

        if (delay !== null) {
            const id = setInterval(handler, delay);
            return () => clearInterval(id);
        }
    }, [ delay ]);
};
