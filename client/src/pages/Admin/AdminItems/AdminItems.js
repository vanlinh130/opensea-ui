import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AdminItems.module.scss';
import CheckName from '~/components/CheckName/CheckName';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPenToSquare, faRightToBracket, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { deletePost } from '~/actions/posts';
import { Link, useLocation } from 'react-router-dom';
import config from '~/config';
import decode from 'jwt-decode';

const cx = classNames.bind(styles);

const AdminItems = ({ post }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();

    const handleDelete = () => {
        dispatch(deletePost(post._id));
    };

    useEffect(() => {
        const token = user?.token;

        // JWT
        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime());
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <div className={cx('table-item')}>
            <div className={cx('admin-menu-info')}>
                <div className={cx('item-menu')}>
                    <Link to={config.routes.detail}>
                        <img src={post.selectedFile} alt="images" />
                    </Link>
                </div>
                <div className={cx('item-menu')}>
                    <Link to={config.routes.detail}>
                        <h3>{post.name}</h3>
                    </Link>
                    <CheckName />
                </div>
                <div className={cx('item-menu')}>
                    <span>{post.title}</span>
                </div>
            </div>

            <div className={cx('admin-menu-message')}>
                <div className={cx('item-menu')}>
                    <p>{post.message}</p>
                </div>
            </div>

            <div className={cx('admin-menu-action')}>
                <div className={cx('item-menu', 'item-menu-change')}>
                    <span>{post.tags.map((tag) => `#${tag} `)}</span>
                </div>

                <div className={cx('item-menu')}>
                    <span>{moment(post.createdAt).fromNow()}</span>
                </div>

                {user ? (
                    <div className={cx('item-menu', 'item-menu-sale')}>
                        <Link to={config.routes.detail}>
                            <button className={cx('btn-product')}>
                                <FontAwesomeIcon icon={faGlobe} />
                            </button>
                        </Link>
                        <Link to={config.routes.createId}>
                            <button className={cx('btn-product', 'btn-update')}>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                        </Link>
                        <button className={cx('btn-product', 'btn-delete')} onClick={handleDelete}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                ) : (
                    <div className={cx('item-menu', 'item-menu-sale')}>
                        <Link to={config.routes.auth}>
                            <button className={cx('btn-product')}>
                                <FontAwesomeIcon icon={faRightToBracket} />
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminItems;
