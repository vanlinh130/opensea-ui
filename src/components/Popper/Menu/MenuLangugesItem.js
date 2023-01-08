import React from 'react';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const MenuLanguagesItem = ({ title, onBack }) => {
    return (
        <header className={cx('header')} onClick={onBack}>
            <FontAwesomeIcon icon={faLanguage} />
            <h4 className={cx('header-title')}>{title}</h4>
            <button className={cx('back-btn')}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
        </header>
    );
};

export default MenuLanguagesItem;
