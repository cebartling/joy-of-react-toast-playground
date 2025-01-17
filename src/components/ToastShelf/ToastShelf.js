import React, {useContext} from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import {ToastContext} from "../ToastProvider";

function ToastShelf() {
    const {toasts, removeToast} = useContext(ToastContext);

    return (
        <ol className={styles.wrapper} role='region' aria-live='polite' aria-label='Notification'>
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
