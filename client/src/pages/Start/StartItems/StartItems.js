import React from 'react';
import classNames from 'classnames/bind';
import ReactStars from 'react-rating-stars-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './StartItems.module.scss';
const cx = classNames.bind(styles);

const StartItems = ({ post }) => {
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
                        <span>789</span>

                        <ReactStars count={1} size={24} edit={true} isHalf={true} activeColor="#ffd700" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default StartItems;
