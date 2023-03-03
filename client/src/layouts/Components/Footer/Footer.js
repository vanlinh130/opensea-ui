import classNames from 'classnames/bind';

import { IconBird, IconInstagram, IconFace, IconClown, IconYoutube, IconTiktok } from '~/components/Icons';
import styles from './Footer.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Footer({ classes, btnFooter = true }) {
    return (
        <h2 className={cx('footer', classes)}>
            <div className={cx('footer-container')}>
                {btnFooter && (
                    <div className={cx('footer-top')}>
                        <div className={cx('footer-top-left')}>
                            <h3>Stay in the loop</h3>
                            <span>
                                Join our mailing list to stay in the loop with our newest feature releases, NFT drops,
                                and tips and tricks for navigating OpenSea.
                            </span>
                            <form className={cx('form')}>
                                <div className={cx('form-input')}>
                                    <input placeholder="Your email address" name="email" />
                                </div>
                                <button>Sign up</button>
                            </form>
                        </div>
                        <div className={cx('footer-top-right')}>
                            <h3>Join the community</h3>
                            <div className={cx('info-icons')}>
                                <button>
                                    <IconBird />
                                </button>
                                <button>
                                    <IconInstagram />
                                </button>
                                <button>
                                    <IconFace />
                                </button>
                                <button>
                                    <IconClown />
                                </button>
                                <button>
                                    <IconYoutube />
                                </button>
                                <button>
                                    <IconTiktok />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className={cx('footer-center')}>
                    <div className={cx('footer-center-left')}>
                        <img src={images.logo} alt="images" />
                        <h3>OpenSea</h3>
                        <span>
                            The world s first and largest digital marketplace for crypto collectibles and non-fungible
                            tokens (NFTs). Buy, sell, and discover exclusive digital items.
                        </span>
                    </div>
                    <div className={cx('footer-center-right')}>
                        <div className={cx('center-info-item')}>
                            <h3>Marketplace</h3>
                            <ul>
                                <li>All NFTs</li>
                                <li>Art</li>
                                <li>Collectibles</li>
                                <li>Domain Names</li>
                                <li>Music</li>
                                <li>Photography</li>
                                <li>Sports</li>
                                <li>Trading Cards</li>
                                <li>Utility</li>
                                <li>Virtual Worlds</li>
                            </ul>
                        </div>
                        <div className={cx('center-info-item')}>
                            <h3>My Account</h3>
                            <ul>
                                <li>Profile</li>
                                <li>Favorites</li>
                                <li>WatchList</li>
                                <li>My Collections</li>
                                <li>Create</li>
                                <li>Settings</li>
                            </ul>
                            <h3 style={{ marginTop: '48px' }}>Stats</h3>
                            <ul>
                                <li>Rankings</li>
                                <li>Activity</li>
                            </ul>
                        </div>
                        <div className={cx('center-info-item')}>
                            <h3>Resources</h3>
                            <ul>
                                <li>Learn</li>
                                <li>Help Center</li>
                                <li>Platform Status</li>
                                <li>Partners</li>
                                <li>Taxes</li>
                                <li>Blog</li>
                                <li>Docs</li>
                                <li>Newsletter</li>
                            </ul>
                        </div>
                        <div className={cx('center-info-item')}>
                            <h3>Company</h3>
                            <ul>
                                <li>About</li>
                                <li>Careers</li>
                                <li>Ventures</li>
                                <li>Grants</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={cx('footer-bottom')}>
                    <div className={cx('bottom-left')}>
                        <p>© 2018 - 2023 Ozone Networks, Inc</p>
                    </div>
                    <div className={cx('bottom-right')}>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
                </div>
            </div>
        </h2>
    );
}

export default Footer;
