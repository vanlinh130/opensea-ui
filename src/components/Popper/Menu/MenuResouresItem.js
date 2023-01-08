import React from 'react';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import {} from '~/components/Icons';
import {
    IconResBird,
    IconResInstagram,
    IconResFace,
    IconResClown,
    IconResYoutube,
    IconResTikTok,
} from './../../Icons/Icons';

const cx = classNames.bind(styles);

const MenuResItem = () => {
    return (
        <header className={cx('resource')}>
            <IconResBird className={cx('resource-icon')} />
            <IconResInstagram />
            <IconResFace />
            <IconResClown />
            <IconResYoutube />
            <IconResTikTok />
        </header>
    );
};

export default MenuResItem;
