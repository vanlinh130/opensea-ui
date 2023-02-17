import React from 'react';
import { IconButton, InputAdornment, TextField } from '@material-ui/core';

import classNames from 'classnames/bind';
import styles from './Auth.module.scss';

const cx = classNames.bind(styles);

const Input = ({ name, handleChange, label, autoFocus, type, className }) => {
    return (
        <div className={cx('input')}>
            <TextField
                name={name}
                variant="outlined"
                label={label}
                required
                fullWidth
                onChange={handleChange}
                autoFocus={autoFocus}
                className={className}
                type={type}
            ></TextField>
        </div>
    );
};

export default Input;
