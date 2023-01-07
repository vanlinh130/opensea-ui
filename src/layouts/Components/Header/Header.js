import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faCartShopping, faCircleUser, faMagnifyingGlass, faWallet } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import config from '~/config';
import images from '~/assets/images';
import { LogoIcon } from '~/components/Icons/Icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img className={cx('logo-opensea')} src={images.logo} alt="opensea" />
                    <LogoIcon className={cx('brand-name')} />
                </Link>

                {/* search */}

                <div className={cx('search')}>
                    <div className={cx('search-input')}>
                        <FontAwesomeIcon className={cx('icon-search')} icon={faMagnifyingGlass} />
                        <input placeholder="Search items, collections, and accounts" />
                        <div className={cx('open-using')}>/</div>
                    </div>
                </div>
                {/* Actions */}
                <ul className={cx('fresnel-container')}>
                    <div className={cx('fresnel-list')}>
                        <li>
                            <Link to={config.routes.explore} className={cx('fresnel-item')}>
                                Explore
                            </Link>
                        </li>
                        <li>
                            <Link to={config.routes.drop} className={cx('fresnel-item')}>
                                Drops
                            </Link>
                        </li>
                        <li>
                            <Link to={config.routes.start} className={cx('fresnel-item')}>
                                Starts
                            </Link>
                        </li>
                        <li>
                            <Link to={config.routes.resource} className={cx('fresnel-item')}>
                                Resources
                            </Link>
                        </li>
                    </div>
                    <div className={cx('fresnel-list')}>
                        <li>
                            <Link className={cx('fresnel-item', 'item-icon')}>
                                <FontAwesomeIcon icon={faCircleUser} />
                            </Link>
                        </li>
                        <li>
                            <Link className={cx('fresnel-item', 'item-icon')}>
                                <FontAwesomeIcon icon={faWallet} />
                            </Link>
                        </li>
                        <li>
                            <Link className={cx('fresnel-item', 'item-icon')}>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
        </header>
    );
}

export default Header;
