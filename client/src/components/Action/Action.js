import React from 'react';
import classNames from 'classnames/bind';
import styles from './Action.module.scss';

const cx = classNames.bind(styles);

const Action = ({ title, classes }) => {
    return (
        <>
            <button className={cx('nav-btn')}>
                <span className={classes}>{title}</span>
            </button>
        </>
    );
};

export default Action;
