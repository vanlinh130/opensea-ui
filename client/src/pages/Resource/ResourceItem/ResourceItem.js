import React from 'react';
import classNames from 'classnames/bind';
import styles from './ResourceItem.module.scss';
import { useNavigate } from 'react-router-dom';
import CheckName from '~/components/CheckName/CheckName';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as faNoLike } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp as faLike } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { likePost } from '~/actions/posts';
import moment from 'moment/moment';

const cx = classNames.bind(styles);

const ResourceItem = ({
    post,
    title = false,
    name = false,
    tags = false,
    checkName = false,
    btnLikes = false,
    moments = false,
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('profile'));

    const openPost = () => {
        navigate(`/details/${post._id}`);
    };

    const Likes = () => {
        if (post.likes.length > 0) {
            return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id)) ? (
                <>
                    <FontAwesomeIcon icon={faLike} />
                    &nbsp;
                    {post.likes.length > 2
                        ? `You & ${post.likes.length - 1} others`
                        : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}
                </>
            ) : (
                <>
                    <FontAwesomeIcon icon={faNoLike} />
                    &nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
                </>
            );
        }

        return (
            <>
                <FontAwesomeIcon icon={faNoLike} />
                &nbsp;Like
            </>
        );
    };

    return (
        <>
            <div className={cx('item')}>
                <div className={cx('item-card')} onClick={openPost}>
                    <img src={post.selectedFile} alt="images" />
                </div>
                <div className={cx('item-title')}>
                    <div className={cx('item-des')}>
                        {title && <h3>{post.title}</h3>}
                        {name && <h3>{post.name}</h3>}
                        {tags && <h3>{post.tags}</h3>}
                        {checkName && <CheckName />}
                    </div>
                    {btnLikes && (
                        <button
                            className={cx('btn-item')}
                            disabled={!user?.result}
                            onClick={() => dispatch(likePost(post._id))}
                        >
                            <Likes />
                        </button>
                    )}
                    {moments && <p>{moment(post.createdAt).fromNow()}</p>}
                </div>
            </div>
        </>
    );
};

export default ResourceItem;
