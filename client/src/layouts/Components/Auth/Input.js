import React from 'react';
import classNames from 'classnames/bind';
import styles from './Auth.module.scss';

const cx = classNames.bind(styles);

const Input = ({ name, handleChange, placeholder, autoFocus, type }) => {
    return (
        <div className={cx('input')}>
            <input
                name={name}
                onChange={handleChange}
                placeholder={placeholder}
                autoFocus={autoFocus}
                type={type}
            ></input>
        </div>
    );
};

export default Input;
