import React from 'react';
import classNames from 'classnames/bind';
import style from './CollectorItem.module.scss';
import CheckName from '~/components/CheckName/CheckName';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(style);

const CollectorItem = ({ post, classes }) => {
    const navigate = useNavigate();

    const openPost = () => {
        navigate(`/details/${post._id}`);
    };

    return (
        <div className={cx('collector-item', classes)} onClick={openPost}>
            <div className={cx('item-image')}>
                <img src={post.selectedFile} alt="images" />
            </div>
            <div className={cx('item-content')}>
                <div className={cx('content-heading')}>
                    <h3>{post.name}</h3>
                    <CheckName />
                </div>
                <div className={cx('item-text')}>
                    <div>
                        <span>FLOOR</span>
                        <div>19.80 WETH</div>
                    </div>
                    <div>
                        <span>24H VOLUME</span>
                        <div>1.368 ETH</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectorItem;
