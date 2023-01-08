import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { IconOne, IconServer, IconSix, IconThree, IconTow, Iconeight, Iconfive, Iconfour } from '~/components/Icons';
import styles from './HomeTable.module.scss';
import TableItems from './TableItems/TableItems';
import ChainsIcons from './ChainsIcons';

const cx = classNames.bind(styles);

function HomeTable() {
    return (
        <div className={cx('main')}>
            <header className={cx('header-table')}>
                <div className={cx('trend-top')}>
                    <button className={cx('table-btn')}>
                        <span>Trending</span>
                    </button>
                    <button className={cx('table-btn')}>
                        <span>Top</span>
                    </button>
                </div>
                <div className={cx('view')}>
                    <button className={cx('view-btn', 'time-btn')}>
                        <h3>24h</h3>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                    <button className={cx('view-btn')}>
                        <div className={cx('chains-btn')}>
                            <span>All chains</span>
                        </div>
                        <ChainsIcons icon={<IconOne />} />
                        <ChainsIcons icon={<IconTow />} />
                        <ChainsIcons icon={<IconThree />} />
                        <ChainsIcons icon={<Iconfour />} />
                        <ChainsIcons icon={<Iconfive />} />
                        <ChainsIcons icon={<IconSix />} />
                        <ChainsIcons icon={<IconServer />} />
                        <ChainsIcons icon={<Iconeight />} />
                    </button>

                    <button className={cx('view-btn')}>
                        <div className={cx('chains-btn')}>
                            <span>View all</span>
                        </div>
                    </button>
                </div>
            </header>

            <div className={cx('table')}>
                <div className={cx('table-list')}>
                    <div className={cx('table-header')}>
                        <div className={cx('header-collection')}>
                            <span>COLLECTION</span>
                        </div>
                        <div className={cx('header-floor')}>
                            <span>FLOOR PRICE</span>
                        </div>
                        <div className={cx('header-volume')}>
                            <span>VOLUME</span>
                        </div>
                    </div>
                    <TableItems />
                    <TableItems />
                    <TableItems />
                    <TableItems />
                    <TableItems />
                </div>
                <div className={cx('table-list')}>
                    <div className={cx('table-header')}>
                        <div className={cx('header-collection')}>
                            <span>COLLECTION</span>
                        </div>
                        <div className={cx('header-floor')}>
                            <span>FLOOR PRICE</span>
                        </div>
                        <div className={cx('header-volume')}>
                            <span>VOLUME</span>
                        </div>
                    </div>
                    <TableItems />
                    <TableItems />
                    <TableItems />
                    <TableItems />
                    <TableItems />
                </div>
            </div>
        </div>
    );
}

export default HomeTable;
