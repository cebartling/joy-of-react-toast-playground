import React from 'react';
import {AlertOctagon, AlertTriangle, CheckCircle, Info, X,} from 'react-feather';

import styles from './Toast.module.css';
import VisuallyHidden from "../VisuallyHidden";

const ICONS_BY_VARIANT = {
    notice: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    error: AlertOctagon,
};

function Toast({children, variant, handleClose}) {
    const Icon = ICONS_BY_VARIANT[variant];

    function handleOnClickCloseButton() {
        handleClose();
    }

    return (
        <div className={`${styles.toast} ${styles[variant]}`}>
            <div className={styles.iconContainer}>
                <Icon size={24}/>
            </div>
            <p className={styles.content}>
                <VisuallyHidden>
                    {variant} -
                </VisuallyHidden>
                {children}
            </p>
            <button className={styles.closeButton}
                    onClick={handleOnClickCloseButton}
                    aria-label='Dismiss message'
                    aria-live='off'>
                <X size={24}/>
                <VisuallyHidden>
                    Dismiss message
                </VisuallyHidden>
            </button>
        </div>
    );
}

export default Toast;

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