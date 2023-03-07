import React from 'react';
import classNames from 'classnames/bind';
import styles from './ResourceItem.module.scss';

const cx = classNames.bind(styles);

const ResourceItem = ({ post, title = false, name = false, tags = false, message = false }) => {
    return (
        <>
            <div className={cx('item')}>
                <div className={cx('item-card')}>
                    <img src={post.selectedFile} alt="images" />
                </div>
                <div className={cx('item-title')}>
                    {title && <h3>{post.title}</h3>}
                    {name && <h3>{post.name}</h3>}
                    {tags && <h3>{post.tags}</h3>}
                </div>
            </div>
        </>
    );
};

export default ResourceItem;
