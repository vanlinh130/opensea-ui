import React from 'react';
import classNames from 'classnames/bind';

import styles from './HeaderTitle.module.scss';

const cx = classNames.bind(styles);

const HeaderTitle = ({ title }) => {
    return (
        <div className={cx('heading')}>
            <h1>Explore {title}</h1>
        </div>
    );
};

export default HeaderTitle;
