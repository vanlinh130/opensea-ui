import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import styles from './HomeTable.module.scss';
import TableItems from './TableItems/TableItems';
import Create from '~/layouts/Components/Create';
import { Link } from 'react-router-dom';
import Chains from '~/components/Chain/Chains';
import { ChainsIcons, ChevronDown } from '~/components/Chain';
import { IconOne, IconTow, IconThree, Iconfour, Iconfive, IconSix, IconServer, Iconeight } from '~/components/Icons';
import Action from '~/components/Action/Action';

const cx = classNames.bind(styles);

function HomeTable({ currentId, setCurrentId }) {
    const posts = useSelector((state) => state.posts);

    return (
        <div className={cx('main')}>
            <header className={cx('header-table')}>
                <div className={cx('trend-top')}>
                    <Action classes={cx('trend-btn')} title={'Trending'} />
                    <Action classes={cx('trend-btn')} title={'Top'} />
                </div>
                <div className={cx('view')}>
                    <ChevronDown title={'24h'} />

                    <Chains title={'All Chains'}>
                        <ChainsIcons icon={<IconOne />} />
                        <ChainsIcons icon={<IconTow />} />
                        <ChainsIcons icon={<IconThree />} />
                        <ChainsIcons icon={<Iconfour />} />
                        <ChainsIcons icon={<Iconfive />} />
                        <ChainsIcons icon={<IconSix />} />
                        <ChainsIcons icon={<IconServer />} />
                        <ChainsIcons icon={<Iconeight />} />
                    </Chains>

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

                    {!posts.length ? (
                        <div />
                    ) : (
                        <>
                            {posts.map((post) => (
                                <div key={post._id}>
                                    <Link to="/detail">
                                        <TableItems post={post} setCurrentId={setCurrentId} />
                                    </Link>
                                </div>
                            ))}
                        </>
                    )}
                </div>
                <div className={cx('table-list')}>
                    <Create currentId={currentId} setCurrentId={setCurrentId} />
                </div>
            </div>
        </div>
    );
}

export default HomeTable;
