import React from 'react';
import styles from './style.module.css';
import { props } from './interfaces';

const Modal = ({ show, close, children }: props) => {
    return show ? (
        <div>
            <div className={styles.active}>{children}</div>
        </div>
    ) : null;
};

export default Modal;