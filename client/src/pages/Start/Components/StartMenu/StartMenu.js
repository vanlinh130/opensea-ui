import React from 'react';
import classNames from 'classnames/bind';
import { faArrowsUpDown, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './StartMenu.module.scss';
import Collection from '~/components/Collection/Collection';

const cx = classNames.bind(styles);

const StartMenu = () => {
    return (
        <div className={cx('start-menu')}>
            <div className={cx('menu-info')}>
                <Collection title={'COLLECTION'} />
            </div>
            <div className={cx('menu-list')}>
                <Collection
                    title={'VOLUME'}
                    icons={<FontAwesomeIcon icon={faChevronDown} />}
                    classes={cx('menu-item')}
                />
                <Collection
                    title={'% CHANGE'}
                    icons={<FontAwesomeIcon icon={faArrowsUpDown} />}
                    classes={cx('menu-item')}
                />
                <Collection
                    title={'Titles'}
                    icons={<FontAwesomeIcon icon={faArrowsUpDown} />}
                    classes={cx('menu-item')}
                />
                <Collection
                    title={'SALES'}
                    icons={<FontAwesomeIcon icon={faArrowsUpDown} />}
                    classes={cx('menu-item')}
                />
            </div>
        </div>
    );
};

export default StartMenu;
