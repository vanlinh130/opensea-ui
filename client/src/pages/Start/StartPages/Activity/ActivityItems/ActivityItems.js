import React from 'react';
import classNames from 'classnames/bind';
import moment from 'moment/moment';

import styles from './ActivityItems.module.scss';
import { IconActivity } from '~/components/Icons';
import CheckName from '~/components/CheckName/CheckName';

const cx = classNames.bind(styles);

const ActivityItems = ({ post }) => {
    return (
        <div className={cx('activity-right-content')}>
            <div className={cx('content-item')}>
                <div className={cx('item-offer')}>
                    <IconActivity />
                    <span>Offers</span>
                </div>
                <div className={cx('item-img')}>
                    <img src={post.selectedFile} alt="images" />
                    <div className={cx('item-info')}>
                        <div className={cx('item-info-name')}>
                            <span>{post.name}</span>
                            <CheckName />
                        </div>
                        <div className={cx('item-info-title')}>
                            <p>{post.title}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('content-price')}>
                <div className={cx('price-one')}>
                    <span>{post.tags} ETH</span>
                    <p>$140.2</p>
                </div>
                <div className={cx('price-tow')}>
                    <span>#{post.tags}</span>
                </div>
                <div className={cx('price-three')}>
                    <h4>1</h4>
                </div>
            </div>
            <div className={cx('content-info')}>
                <h4 className={cx('content-info-des')}>{post.message}</h4>
                <span className={cx('content-info-to')}>---</span>
                <span className={cx('content-info-time')}>{moment(post.createdAt).fromNow()}</span>
            </div>
        </div>
    );
};

export default ActivityItems;
