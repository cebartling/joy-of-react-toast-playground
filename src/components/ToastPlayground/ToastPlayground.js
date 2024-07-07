import React, {useState} from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
    const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);

    function handleOnClickPopToastButton() {
        console.log(variant);
    }

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png"/>
                <h1>Toast Playground</h1>
            </header>

            <div className={styles.controlsWrapper}>
                <div className={styles.row}>
                    <label
                        htmlFor="message"
                        className={styles.label}
                        style={{alignSelf: 'baseline'}}
                    >
                        Message
                    </label>
                    <div className={styles.inputWrapper}>
                        <textarea id="message" className={styles.messageInput}/>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>Variant</div>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        <label htmlFor="variant-notice">
                            <input
                                id="variant-notice"
                                type="radio"
                                name="variant"
                                checked={variant === VARIANT_OPTIONS[0]}
                                onChange={() => setVariant(VARIANT_OPTIONS[0])}
                            />
                            notice
                        </label>
                        <label htmlFor="variant-warning">
                            <input
                                id="variant-warning"
                                type="radio"
                                name="variant"
                                checked={variant === VARIANT_OPTIONS[1]}
                                onChange={() => setVariant(VARIANT_OPTIONS[1])}
                            />
                            warning
                        </label>
                        <label htmlFor="variant-success">
                            <input
                                id="variant-success"
                                type="radio"
                                name="variant"
                                checked={variant === VARIANT_OPTIONS[2]}
                                onChange={() => setVariant(VARIANT_OPTIONS[2])}
                            />
                            success
                        </label>
                        <label htmlFor="variant-error">
                            <input
                                id="variant-error"
                                type="radio"
                                name="variant"
                                checked={variant === VARIANT_OPTIONS[3]}
                                onChange={() => setVariant(VARIANT_OPTIONS[3])}
                            />
                            error
                        </label>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}/>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        <Button onClick={handleOnClickPopToastButton}>Pop Toast!</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToastPlayground;
