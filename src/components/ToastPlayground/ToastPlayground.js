import React, {useState} from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from "../ToastShelf";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
    const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);
    const [message, setMessage] = useState('');
    const [toasts, setToasts] = useState([]);
    // const [isOpen, setIsOpen] = useState(false);

    function handleOnClickPopToastButton() {
        setIsOpen(true);
    }

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png"/>
                <h1>Toast Playground</h1>
            </header>

            {/*{isOpen && <Toast  variant={variant} handleClose={() => setIsOpen(false)}>{message}</Toast>}*/}

            <ToastShelf />

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
                        <textarea id="message" className={styles.messageInput} value={message}
                                  onChange={(e) => setMessage(e.currentTarget.value)}/>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>Variant</div>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        {VARIANT_OPTIONS.map((variantOption) => {
                            const id = `variant-${variantOption}`;
                            return (
                                <label key={id} htmlFor={id}>
                                    <input
                                        id={id}
                                        type="radio"
                                        name="variant"
                                        value={variantOption}
                                        checked={variant === variantOption}
                                        onChange={(e) => setVariant(e.target.value)}
                                    />
                                    {variantOption}
                                </label>
                            );
                        })}
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
