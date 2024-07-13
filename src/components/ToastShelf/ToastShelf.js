import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, removeToast}) {
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
