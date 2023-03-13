import React from 'react';
import classNames from 'classnames/bind';
import styles from './PartnersItem.module.scss';
import CheckName from '~/components/CheckName/CheckName';

const cx = classNames.bind(styles);

const PartnersItem = ({ post }) => {
    return (
        <div className={cx('who-partnered-item')}>
            <img src={post.selectedFile} alt="images-who" className={cx('img-item')} />
            <div className={cx('item-content')}>
                <img src={post.selectedFile} alt="images-who" />
                <div className={cx('item-content-name')}>
                    <span>{post.name}</span>
                    <CheckName />
                </div>
            </div>
        </div>
    );
};

export default PartnersItem;
