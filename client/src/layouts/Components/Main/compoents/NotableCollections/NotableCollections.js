import React from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './NotableCollections.module.scss';
import CollectionItem from './CollectionItem/CollectionItem';
const cx = classNames.bind(styles);

const NotableCollections = ({ setCurrentId }) => {
    const { posts } = useSelector((state) => state.posts);

    return !posts?.length ? (
        <div />
    ) : (
        <>
            <h2>Notable collections</h2>
            <div className={cx('collections')}>
                {posts.map((post) => (
                    <div key={post._id}>
                        <Link to="">
                            <CollectionItem post={post} setCurrentId={setCurrentId} />
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default NotableCollections;
