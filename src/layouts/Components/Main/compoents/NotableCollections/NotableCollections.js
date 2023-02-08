import React from 'react';
import classNames from 'classnames/bind';

import styles from './NotableCollections.module.scss';
import CollectionItem from './CollectionItem/CollectionItem';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

const NotableCollections = ({ setCurrentId }) => {

    const posts = useSelector((state) => state.posts);

    // console.log(posts);
    return (
        !posts.length ? <div/> : (
              <>
                <h2>Notable collections</h2>
                <div className={cx('collections')}>
                    {posts.map((post) => (
                        <div key={post._id}>
                            <CollectionItem post={post} setCurrentId={setCurrentId}/>
                        </div>
                    ))}
                </div>
              </>
        )
    )
};

export default NotableCollections;
