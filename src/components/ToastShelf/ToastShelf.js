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


//     < li
//
// class
//
// = "ToastShelf_toastWrapper" >
//     < div
//
// class
//
// = "Toast_toast Toast_error" >
//     < div
//
// class
//
// = "Toast_iconContainer" >
//     < !--Variant
// SVG
// icon-- >
// < /div>
// <p class="Toast_content">
//     + <div class="VisuallyHidden_wrapper">
//     + error -
//     + </div>
//     Something went wrong! Please contact customer support
// </p>
// <button
//     class="Toast_closeButton"
// +       aria - label = "Dismiss message"
// + aria - live = "off"
//     >
//     < !--Close
// SVG
// icon-- >
// -<div class="VisuallyHidden_wrapper">
//     - Dismiss message
//     - </div>
// </button>
// </div>
// </li>
// </ol>