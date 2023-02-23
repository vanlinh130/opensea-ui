import React from 'react';
import classNames from 'classnames/bind';
import styles from './Collection.module.scss';

const cx = classNames.bind(styles);

const Collection = ({ title, classes }) => {
    return (
        <>
            <div className={cx('collection', classes)}>
                <span>{title}</span>
            </div>
        </>
    );
};

export default Collection;
