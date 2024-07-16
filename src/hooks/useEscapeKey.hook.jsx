import {useEffect} from "react";


export function useEscapeKey(functionToCall) {
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            functionToCall();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleEscape);

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, []);
}