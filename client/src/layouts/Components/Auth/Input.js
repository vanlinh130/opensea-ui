import React from 'react';
import classNames from 'classnames/bind';
import { InputAdornment, TextField } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import styles from './Auth.module.scss';

const cx = classNames.bind(styles);

const Input = ({ name, handleChange, label, autoFocus, type, className, handleShowPassword }) => {
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
                InputProps={
                    name === 'password'
                        ? {
                              endAdornment: (
                                  <InputAdornment position="end">
                                      <div onClick={handleShowPassword} className={cx('eye-pass')}>
                                          {type === 'password' ? (
                                              <FontAwesomeIcon icon={faEye} />
                                          ) : (
                                              <FontAwesomeIcon icon={faEyeSlash} />
                                          )}
                                      </div>
                                  </InputAdornment>
                              ),
                          }
                        : null
                }
            ></TextField>
        </div>
    );
};

export default Input;
