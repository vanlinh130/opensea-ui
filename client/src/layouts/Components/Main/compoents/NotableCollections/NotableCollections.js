import React from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import styles from './NotableCollections.module.scss';
import CollectionItem from './CollectionItem/CollectionItem';
const cx = classNames.bind(styles);

const NotableCollections = ({ setCurrentId }) => {
    const { posts, isLoading } = useSelector((state) => state.posts);

    if (!posts.length && !isLoading) return 'No posts';

    return isLoading ? (
        <div />
    ) : (
        <>
            <h2>Notable collections</h2>
            <div className={cx('collections')}>
                {posts.map((post) => (
                    <div key={post._id} className={cx('collections-item')}>
                        <CollectionItem post={post} setCurrentId={setCurrentId} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default NotableCollections;
