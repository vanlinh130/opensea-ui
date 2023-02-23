import React from 'react';
import classNames from 'classnames/bind';
import styles from './ProductItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faGlobe, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const ProductItems = ({ post }) => {
    return (
        <>
            <div className={cx('table-item')}>
                <div className={cx('list-collection')}>
                    <span>1</span>
                    <img src={post.selectedFile} alt="images" />
                    <h3>{post.name}</h3>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                </div>

                <div className={cx('list-menu')}>
                    <div className={cx('item-menu')}>
                        <span>{post.tags.map((tag) => `#${tag} `)}</span>
                    </div>
                    <div className={cx('item-menu', 'item-menu-change')}>
                        <span>+39%</span>
                    </div>
                    <div className={cx('item-menu')}>
                        <span>{post.title}</span>
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

export default ProductItems;
