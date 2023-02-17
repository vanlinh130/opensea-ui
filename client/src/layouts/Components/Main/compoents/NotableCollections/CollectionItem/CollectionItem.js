import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEllipsis, faThumbsDown, faThumbsUp, faTrash } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import styles from './CollectionItem.module.scss';
import { deletePost, likePost } from '~/actions/posts';

const cx = classNames.bind(styles);

const CollectionItem = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {
        if (post.likes.length > 0) {
            return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id)) ? (
                <>
                    <FontAwesomeIcon icon={faThumbsUp} />
                    &nbsp;
                    {post.likes.length > 2
                        ? `You & ${post.likes.length - 1} others`
                        : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}
                </>
            ) : (
                <>
                    <FontAwesomeIcon icon={faThumbsDown} />
                    &nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
                </>
            );
        }

        return (
            <>
                <FontAwesomeIcon icon={faThumbsDown} />
                &nbsp;Like
            </>
        );
    };

    return (
        <div className={cx('collection-item')}>
            <div className={cx('item-image')}>
                <img src={post.selectedFile} alt="images" />
                <div className={cx('overlay')}>
                    <p>{moment(post.createdAt).fromNow()}</p>
                </div>
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                    <div className={cx('overlay2')}>
                        <button onClick={() => setCurrentId(post._id)}>
                            <FontAwesomeIcon icon={faEllipsis} />
                        </button>
                    </div>
                )}
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
                    <button
                        className={cx('btn-link')}
                        size="small"
                        disabled={!user?.result}
                        onClick={() => dispatch(likePost(post._id))}
                    >
                        <Likes />
                    </button>
                    {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                        <button
                            className={cx('btn-delete')}
                            size="small"
                            onClick={() => dispatch(deletePost(post._id))}
                        >
                            <FontAwesomeIcon icon={faTrash} /> Delete
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CollectionItem;
