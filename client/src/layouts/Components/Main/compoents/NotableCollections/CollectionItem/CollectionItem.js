import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEllipsis, faThumbsUp, faTrash } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import styles from './CollectionItem.module.scss';
import { deletePost, likePost } from '~/actions/posts';

const cx = classNames.bind(styles);

const CollectionItem = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();

    const handleUpdate = (_id) => {
        setCurrentId(post._id);
    };

    return (
        <div className={cx('collection-item')}>
            <div className={cx('item-image')}>
                <img src={post.selectedFile} alt="images" />
                <div className={cx('overlay')}>
                    <p>{moment(post.createdAt).fromNow()}</p>
                </div>
                <div className={cx('overlay2')}>
                    <button onClick={handleUpdate}>
                        <FontAwesomeIcon icon={faEllipsis} />
                    </button>
                </div>
            </div>

            <div className={cx('item-content')}>
                <div className={cx('content-heading')}>
                    <h3>{post.name}</h3>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                </div>
                <h3>{post.title}</h3>
                <p>{post.message}</p>

                <div className={cx('item-text')}>
                    <span>TOTAL VOLUME</span>
                    <div>{post.tags.map((tag) => `#${tag} `)}</div>
                </div>

                <div className={cx('card-actions')}>
                    <button className={cx('btn-link')} size="small" onClick={() => dispatch(likePost(post._id))}>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        &nbsp; Link &nbsp; {post.likeCount}
                    </button>

                    <button className={cx('btn-delete')} size="small" onClick={() => dispatch(deletePost(post._id))}>
                        <FontAwesomeIcon icon={faTrash} /> Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CollectionItem;
