import React from 'react';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import images from '~/assets/images';
import { IconProfileAvatar, IconProfileNew } from '~/components/Icons';

const cx = classNames.bind(styles);

const Profile = () => {
    return (
        <div className={cx('profile')}>
            <div className={cx('profile-info')}>
                <div className={cx('profile-info-avatar')}>
                    <img src={images.detail_avatar} alt="avatar" />
                    <div className={cx('profile-info-name')}>
                        <h5>nvVanLinh013</h5>
                        <div className={cx('update-info')}>
                            <IconProfileAvatar />
                            <span>Profile Milk</span>
                        </div>
                    </div>
                </div>
                <div className={cx('profile-info-list')}>
                    <div className={cx('profile-info-item')}>
                        <img src={images.profile_1} alt="images-item" />
                        <div className={cx('deps')}>
                            <span>Special offer for you</span>
                            <IconProfileNew />
                        </div>
                    </div>
                    <div className={cx('profile-info-item')}>
                        <img src={images.profile_2} alt="images-item" />
                        <div className={cx('deps')}>
                            <span>My Account</span>
                        </div>
                    </div>
                    <div className={cx('my-account')}>
                        <span>Ho So</span>
                        <span>Ngan Hang</span>
                        <span>Dia Chi </span>
                        <span>Doi mat khau</span>
                    </div>
                    <div className={cx('profile-info-item')}>
                        <img src={images.profile_3} alt="images-item" />
                        <div className={cx('deps')}>
                            <span>Purchase Order</span>
                        </div>
                    </div>
                    <div className={cx('profile-info-item')}>
                        <img src={images.profile_4} alt="images-item" />
                        <div className={cx('deps')}>
                            <span>Notification</span>
                            <IconProfileNew />
                        </div>
                    </div>
                    <div className={cx('profile-info-item')}>
                        <img src={images.profile_5} alt="images-item" />
                        <div className={cx('deps')}>
                            <span>Warehouse Voucher</span>
                        </div>
                    </div>
                    <div className={cx('profile-info-item')}>
                        <img src={images.profile_6} alt="images-item" />
                        <div className={cx('deps')}>
                            <span>OpenSea Xu</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('profile-content')}></div>
        </div>
    );
};

export default Profile;
