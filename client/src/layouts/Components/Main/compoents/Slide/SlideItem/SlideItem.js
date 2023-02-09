import React from 'react';
import classNames from 'classnames/bind';
import styles from './SlideItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const SlideItem = ({ post }) => {
    return (
        <div className={cx('slide-item')}>
            <img src={post.selectedFile} alt="slide-1" />
            <div className={cx('box')}></div>
            <div className={cx('info')}>
                <div>
                    <h5>{post.creator}</h5>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                </div>
                <span>Floor: 0,2 ETH</span>
            </div>
        </div>
    );
};

export default SlideItem;
