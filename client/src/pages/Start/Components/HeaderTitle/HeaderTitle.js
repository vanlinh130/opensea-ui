import React from 'react';
import classNames from 'classnames/bind';
import styles from './HeaderTitle.module.scss';

const cx = classNames.bind(styles);

const HeaderTitle = ({ title }) => {
    return (
        <>
            <h1 className={cx('heading')}>Collection {title}</h1>
        </>
    );
};

export default HeaderTitle;
