import React from 'react';
import classNames from 'classnames/bind';
import styles from './AdminItems.module.scss';
import CheckName from '~/components/CheckName/CheckName';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const AdminItems = ({ post }) => {
    return (
        <>
            <div className={cx('table-item')}>
                <div className={cx('admin-menu-info')}>
                    <div className={cx('item-menu')}>
                        <img src={post.selectedFile} alt="images" />
                    </div>
                    <div className={cx('item-menu')}>
                        <h3>{post.name}</h3>
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

                    <div className={cx('item-menu', 'item-menu-sale')}>
                        <button className={cx('btn-product')}>
                            <FontAwesomeIcon icon={faGlobe} />
                        </button>
                        <button className={cx('btn-product', 'btn-update')}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        <button className={cx('btn-product', 'btn-delete')}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminItems;
