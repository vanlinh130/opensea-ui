import React from 'react';
import classNames from 'classnames/bind';
import styles from './DetailName.molule.scss';
import CheckName from '~/components/CheckName/CheckName';
import {
    IconDetailAdd,
    IconDetailBrands,
    IconDetailDiscord,
    IconDetailInstagram,
    IconDetailMedium,
    IconDetailTwitter,
    IconDetailWebsite,
} from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faShareAlt } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const DetailName = ({ post }) => {
    return (
        <div className={cx('detail-name')}>
            <div className={cx('name')}>
                <h1>{post.name}</h1>
                <CheckName classes={cx('icon')} />
            </div>
            <div className={cx('icon-lists')}>
                <div className={cx('icon-list-info')}>
                    <div className={cx('icon-item')}>
                        <IconDetailBrands />
                    </div>
                    <div className={cx('icon-item')}>
                        <IconDetailWebsite />
                    </div>
                    <div className={cx('icon-item')}>
                        <IconDetailDiscord />
                    </div>
                    <div className={cx('icon-item')}>
                        <IconDetailMedium />
                    </div>
                    <div className={cx('icon-item')}>
                        <IconDetailInstagram />
                    </div>
                    <div className={cx('icon-item')}>
                        <IconDetailTwitter />
                    </div>
                </div>
                <div className={cx('between')}></div>
                <div className={cx('icon-list-info')}>
                    <div className={cx('icon-item')}>
                        <IconDetailAdd />
                    </div>
                    <div className={cx('icon-item')}>
                        <FontAwesomeIcon style={{ fontSize: '18px' }} icon={faShareAlt} />
                    </div>
                    <div className={cx('icon-item')}>
                        <FontAwesomeIcon style={{ fontSize: '24px' }} icon={faEllipsis} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailName;
