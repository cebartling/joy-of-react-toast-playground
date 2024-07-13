import React, {useContext} from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import {ToastContext} from "../ToastProvider";

function ToastShelf() {
    const {toasts, setToasts} = useContext(ToastContext);

    function removeToast(id) {
        setToasts(toasts.filter((toast) => toast.id !== id));
    }

    return (
        <ol className={styles.wrapper}>
            {toasts.map((toast) => (
                <li key={toast.id} className={styles.toastWrapper}>
                    <Toast variant={toast.variant}
                           handleClose={() => removeToast(toast.id)}>
                        {toast.message}
                    </Toast>
                </li>
            ))}
        </ol>
    );
}

export default ToastShelf;
