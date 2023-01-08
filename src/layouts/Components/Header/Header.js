import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faCartShopping, faCircleUser, faWallet } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import config from '~/config';
import images from '~/assets/images';
import { LogoIcon } from '~/components/Icons/Icons';
import Search from './Search/Search';
import Menu from '~/components/Popper/Menu';
import {
    MENU_ITEMS_EXPLORE,
    MENU_ITEMS_DROPS,
    MENU_ITEMS_STARTS,
    MENU_ITEMS_RESOURCE,
    MENU_ITEMS_PROFILE,
} from './MenuItems';
import MenuLanguage from '~/components/Popper/Menu/MenuLanguges';
import MenuResource from './../../../components/Popper/Menu/MenuResoures';

const cx = classNames.bind(styles);

const handleMenuChange = (menuItem) => {
    // console.log(menuItem);
};

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

                <Search placeholder="Search items, collections, and accounts" />

                {/* Actions */}
                <ul className={cx('fresnel-container')}>
                    <div className={cx('fresnel-list')}>
                        <li>
                            <Menu items={MENU_ITEMS_EXPLORE}>
                                <Link to={config.routes.explore} className={cx('fresnel-item')}>
                                    Explore
                                </Link>
                            </Menu>
                        </li>
                        <li>
                            <Menu items={MENU_ITEMS_DROPS}>
                                <Link to={config.routes.drop} className={cx('fresnel-item')}>
                                    Drops
                                </Link>
                            </Menu>
                        </li>
                        <li>
                            <Menu items={MENU_ITEMS_STARTS}>
                                <Link to={config.routes.start} className={cx('fresnel-item')}>
                                    Starts
                                </Link>
                            </Menu>
                        </li>
                        <li>
                            <MenuResource items={MENU_ITEMS_RESOURCE}>
                                <Link to={config.routes.resource} className={cx('fresnel-item')}>
                                    Resources
                                </Link>
                            </MenuResource>
                        </li>
                    </div>
                    <div className={cx('fresnel-list')}>
                        <li>
                            <MenuLanguage items={MENU_ITEMS_PROFILE} onChange={handleMenuChange}>
                                <Link className={cx('fresnel-item', 'item-icon')}>
                                    <FontAwesomeIcon icon={faCircleUser} />
                                </Link>
                            </MenuLanguage>
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
