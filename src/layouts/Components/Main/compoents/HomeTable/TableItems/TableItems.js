import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import styles from './TableItems.modules.scss';

const cx = classNames.bind(styles);

const TableItems = () => {
    return (
        <div className={cx('table-item')}>
            <div className={cx('item-collection')}>
                <span>1</span>
                <img src={images.table_1} alt="images" />
                <h3>goblintown.wtf</h3>
                <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
            </div>
            <div className={cx('item-floor')}>
                <span>1.12 ETH</span>
            </div>
            <div className={cx('item-volume')}>
                <span>377 ETH</span>
            </div>
        </div>
    );
};

export default TableItems;
