import React from 'react';
import classNames from 'classnames/bind';
import styles from './DropItem.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const DropItem = ({ post }) => {
    return (
        <div>
            <h2>February 25</h2>
            <div className={cx('drop-content')}>
                <div className={cx('content-img')}>
                    <img src={post.selectedFile} alt="images-content" />
                </div>
                <div className={cx('content-info')}>
                    <div className={cx('info-img')}>
                        <img src={post.selectedFile} alt="images-info" />
                    </div>
                    <div className={cx('info-list')}>
                        <div className={cx('info-item-left')}>
                            <h1>{post.title}</h1>
                            <span>{post.name}</span>
                            <span>{post.tags} items - 0.1195 ETH</span>
                            <Button className={cx('btn-item-left')}>
                                <div className={cx('btn-item-heart')}>
                                    <div className={cx('heart')}></div>
                                    <span>MINTING NOW</span>
                                </div>
                            </Button>
                        </div>
                        <div className={cx('info-item-right')}>
                            <Button className={cx('btn-item-right')}>
                                <span>View drop</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropItem;
