import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './CollectionItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const CollectionItem = () => {
    return (
        <div className={cx('collection-item')}>
            <div className={cx('item-image')}>
                <img src={images.collection_1} alt="images" />
            </div>
            <div className={cx('item-content')}>
                <div className={cx('content-heading')}>
                    <h3>Spider Tanks</h3>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                </div>
                <div className={cx('item-text')}>
                    <div>
                        <span>FLOOR</span>
                        <div>
                            <FontAwesomeIcon icon={faChevronLeft} /> 0.01 WETH
                        </div>
                    </div>
                    <div>
                        <span>TOTAL VOLUME</span>
                        <div>3.443 ETH</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectionItem;
