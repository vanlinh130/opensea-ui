import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import style from './CollectorItem.module.scss';

const cx = classNames.bind(style);

const CollectorItem = ({ post }) => {
    return (
        <div className={cx('collector-item')}>
            <div className={cx('item-image')}>
                <img src={post.selectedFile} alt="images" />
            </div>
            <div className={cx('item-content')}>
                <div className={cx('content-heading')}>
                    <h3>{post.name}</h3>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                </div>
                <div className={cx('item-text')}>
                    <div>
                        <span>FLOOR</span>
                        <div>19.80 WETH</div>
                    </div>
                    <div>
                        <span>24H VOLUME</span>
                        <div>1.368 ETH</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectorItem;
