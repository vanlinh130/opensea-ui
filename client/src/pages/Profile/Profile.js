import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import decode from 'jwt-decode';
import { useLocation } from 'react-router-dom';
import { Avatar } from '@material-ui/core';

import styles from './Profile.module.scss';
import images from '~/assets/images';
import { IconProfileAvatar, IconProfileNew } from '~/components/Icons';
import Input from '~/layouts/Components/Auth/Input';
import { ChevronDown } from '~/components/Chain';
import Button from './../../components/Button/Button';

const cx = classNames.bind(styles);

const Profile = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();

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
        <div className={cx('profile')}>
            <div className={cx('profile-info')}>
                <div className={cx('profile-info-avatar')}>
                    {user ? (
                        <>
                            <Avatar src={user.result.imageUrl} alt={user.result.name} className={cx('img-avatar')}>
                                {user.result.name.charAt(0)}
                            </Avatar>
                            <div className={cx('profile-info-name')}>
                                <h5>{user.result.name}</h5>
                                <div className={cx('update-info')}>
                                    <IconProfileAvatar />
                                    <span>Profile Milk</span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <Avatar src={images.no_avatar} alt="images"></Avatar>
                            <div className={cx('profile-info-name')}>
                                <div className={cx('update-info')}>
                                    <IconProfileAvatar />
                                    <span>Profile Milk</span>
                                </div>
                            </div>
                        </>
                    )}
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

            <div className={cx('profile-content')}>
                <div className={cx('profile-content-name')}>
                    <h2>H??? s?? c???a t??i</h2>
                    <span>Qu???n l?? th??ng tin h??? s?? ????? b???o m???t t??i kho???n</span>
                </div>
                <div className={cx('profile-content-account')}>
                    <div className={cx('account-form')}>
                        <form>
                            <div className={cx('account-input')}>
                                <span>T??n ????ng nh???p</span>
                                <Input name="name" label="Name Login" />
                            </div>
                            <div className={cx('account-input')}>
                                <span>T??n</span>
                                <Input name="name" label="Name" />
                            </div>
                            <div className={cx('account-info')}>
                                <span>Email</span>
                                {user && <h4>{user.result.email}</h4>}
                                <p>Thay ?????i</p>
                            </div>
                            <div className={cx('account-info')}>
                                <span>S??? ??i???n tho???i</span>
                                <p>Th??m</p>
                            </div>
                            <div className={cx('account-info')}>
                                <span>Gioi T??nh</span>
                                <div className={cx('account-info-input')}>
                                    <input type="radio" value="Male" name="gender" /> Male
                                </div>
                                <div className={cx('account-info-input')}>
                                    <input type="radio" value="Male" name="gender" /> Male
                                </div>
                                <div className={cx('account-info-input')}>
                                    <input type="radio" value="Male" name="gender" /> Male
                                </div>
                            </div>
                            <div className={cx('account-info')}>
                                <span>Ng??y sinh</span>
                                <ChevronDown title={'1'} classes={cx('dow')} />
                                <ChevronDown title={'Th??ng 1'} classes={cx('dow')} />
                                <ChevronDown title={'2000'} classes={cx('dow')} />
                            </div>
                            <div className={cx('account-info')}>
                                <span></span>
                                <Button disabled outline small className={cx('btn-account')}>
                                    <span>L??u</span>
                                </Button>
                            </div>
                        </form>
                    </div>
                    <div className={cx('account-avatar')}>
                        {user ? (
                            <div className={cx('account-avatar-img')}>
                                <Avatar src={user.result.imageUrl} alt={user.result.name} className={cx('img-account')}>
                                    {user.result.name.charAt(0)}
                                </Avatar>
                            </div>
                        ) : (
                            <div className={cx('account-avatar-img')}>
                                <Avatar src={images.no_avatar} alt="images" className={cx('img-account')}></Avatar>
                            </div>
                        )}
                        <Button className={cx('btn-fill')}>
                            <input type="file" name="myImage" />
                        </Button>
                        <p>D???ng l?????ng file t???i ??a 1 MB ?????nh d???ng:.JPEG, .PNG</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
