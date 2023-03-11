import React from 'react';
import classNames from 'classnames/bind';
import styles from './HelpCenter.module.scss';
import Header from '~/components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const HelpCenter = () => {
    return (
        <div className={cx('')}>
            <Header title="Help Center" avatar />
            <section className={cx('main-content')}>
                <div className={cx('hero-inner')}>
                    <FontAwesomeIcon icon={faSearch} className={cx('hero-inner-icon')} />
                    <input placeholder="Search" />
                </div>
            </section>
        </div>
    );
};

export default HelpCenter;
