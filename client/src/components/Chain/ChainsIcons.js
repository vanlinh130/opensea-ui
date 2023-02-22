import React from 'react';
import classNames from 'classnames/bind';

import styles from './Chains.modules.scss';

const cx = classNames.bind(styles);

const ChainsIcons = ({ icon }) => {
    return <div className={cx('chains-btn')}>{icon}</div>;
};

export default ChainsIcons;
