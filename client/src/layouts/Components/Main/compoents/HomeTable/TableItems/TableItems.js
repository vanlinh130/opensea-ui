import React from 'react';
import classNames from 'classnames/bind';
import styles from './TableItems.modules.scss';
import CheckName from '~/components/CheckName/CheckName';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const TableItems = ({ post }) => {
    const navigate = useNavigate();

    const openPost = () => {
        navigate(`/details/${post._id}`);
    };

    return (
        <div className={cx('table-item')} onClick={openPost}>
            <div className={cx('item-collection')}>
                <span></span>
                <img src={post.selectedFile} alt="images" />
                <h3>{post.name}</h3>
                <CheckName />
            </div>
            <div className={cx('item-floor')}>
                <span>1.12 ETH</span>
            </div>
            <div className={cx('item-volume')}>
                <span>{post.tags.map((tag) => `#${tag} `)}</span>
            </div>
        </div>
    );
};

export default TableItems;
