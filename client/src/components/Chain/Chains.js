import React from 'react';
import classNames from 'classnames/bind';

import styles from './Chains.modules.scss';
// import ChainsIcons from './ChainsIcons';
// import { IconOne, IconTow, IconThree, Iconfour, Iconfive, IconSix, IconServer, Iconeight } from '../Icons';

const cx = classNames.bind(styles);

const Chains = ({ title, children }) => {
    return (
        <>
            <button className={cx('view-btn')}>
                <div className={cx('chains-btn')}>
                    <span>{title}</span>
                </div>
                {children}
            </button>
        </>
    );
};

export default Chains;
