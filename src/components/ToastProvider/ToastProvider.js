import React, {useState} from 'react';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
    const [toasts, setToasts] = useState([]);

    function createToast(variant, message) {
        setToasts([...toasts, {
            id: crypto.randomUUID(),
            variant,
            message,
        }]);
    }

    function removeToast(id) {
        setToasts(toasts.filter((toast) => toast.id !== id));
    }

    function removeAllToasts() {
        setToasts([]);
    }

    return (
        <ToastContext.Provider value={{toasts, createToast, removeToast, removeAllToasts}}>
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;
