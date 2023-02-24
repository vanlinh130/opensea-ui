import React from 'react';
import classNames from 'classnames/bind';
import styles from './ProductItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import CheckName from '~/components/CheckName/CheckName';

const cx = classNames.bind(styles);

const ProductItems = ({ post }) => {
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <>
            {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                <div className={cx('table-item')}>
                    <div className={cx('list-collection')}>
                        <span>1</span>
                        <img src={post.selectedFile} alt="images" />
                    </div>

                    <div className={cx('list-menu')}>
                        <div className={cx('item-menu')}>
                            <h3>{post.name}</h3>
                            <CheckName />
                        </div>

                        <div className={cx('item-menu')}>
                            <span>{post.title}</span>
                        </div>

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
            )}
        </>
    );
};

export default ProductItems;
