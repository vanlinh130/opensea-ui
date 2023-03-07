import React from 'react';
import classNames from 'classnames/bind';
import styles from './ResourceItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const ResourceItem = ({ title }) => {
    return (
        <>
            <div className={cx('item')}>
                <div className={cx('item-card')}>
                    <img src={images.collector_1} alt="" />
                </div>
                <div className={cx('item-title')}>
                    <h3>{title}</h3>
                </div>
            </div>

            <div className={cx('item')}>
                <div className={cx('item-card')}>
                    <img src={images.collector_1} alt="" />
                </div>
                <div className={cx('item-title')}>
                    <h3>{title}</h3>
                </div>
            </div>

            <div className={cx('item')}>
                <div className={cx('item-card')}>
                    <img src={images.collector_1} alt="" />
                </div>
                <div className={cx('item-title')}>
                    <h3>{title}</h3>
                </div>
            </div>

            <div className={cx('item')}>
                <div className={cx('item-card')}>
                    <img src={images.collector_1} alt="" />
                </div>
                <div className={cx('item-title')}>
                    <h3>{title}</h3>
                </div>
            </div>
        </>
    );
};

export default ResourceItem;
