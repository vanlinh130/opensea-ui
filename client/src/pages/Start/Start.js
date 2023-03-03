import classNames from 'classnames/bind';
import { faArrowsUpDown, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import styles from './Start.module.scss';
import { Chains, ChainsIcons, ChevronDown } from '~/components/Chain';
import { IconOne, IconTow, IconThree, Iconfour, Iconfive, IconSix, IconServer, Iconeight } from '~/components/Icons';
import Action from '~/components/Action/Action';
import Collection from '~/components/Collection/Collection';
import StartItems from './StartItem/StartItems';
import { Paper } from '@material-ui/core';
import Paginate from '~/components/Pagination/Pagination';

const cx = classNames.bind(styles);
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
function Start() {
    const { posts } = useSelector((state) => state.posts);

    const query = useQuery();
    const page = query.get('page') || 1;
    // const searchQuery = query.get('searchQuery');

    return (
        <div className={cx('start')}>
            <h1>Collection starts</h1>

            <div className={cx('start-nav')}>
                <Action title={'Top'} />
                <Action title={'Trending'} />
                <Action title={'Watchlist'} />
            </div>

            <div className={cx('start-view')}>
                <div className={cx('start-view-btn')}>
                    <ChevronDown title={'All categories'} />
                    <Chains title={'All chains'}>
                        <ChainsIcons icon={<IconOne />} />
                        <ChainsIcons icon={<IconTow />} />
                        <ChainsIcons icon={<IconThree />} />
                        <ChainsIcons icon={<Iconfour />} />
                        <ChainsIcons icon={<Iconfive />} />
                        <ChainsIcons icon={<IconSix />} />
                        <ChainsIcons icon={<IconServer />} />
                        <ChainsIcons icon={<Iconeight />} />
                    </Chains>
                </div>

                <div>
                    <Chains title={'1h'}>
                        <ChainsIcons icon={'6h'} />
                        <ChainsIcons icon={'24h'} />
                        <ChainsIcons icon={'7d'} />
                        <ChainsIcons icon={'30d'} />
                        <ChainsIcons icon={'All'} />
                    </Chains>
                </div>
            </div>

            <div className={cx('start-menu')}>
                <div className={cx('menu-info')}>
                    <Collection title={'COLLECTION'} />
                </div>
                <div className={cx('menu-list')}>
                    <Collection
                        title={'VOLUME'}
                        icons={<FontAwesomeIcon icon={faChevronDown} />}
                        classes={cx('menu-item')}
                    />
                    <Collection
                        title={'% CHANGE'}
                        icons={<FontAwesomeIcon icon={faArrowsUpDown} />}
                        classes={cx('menu-item')}
                    />
                    <Collection
                        title={'Titles'}
                        icons={<FontAwesomeIcon icon={faArrowsUpDown} />}
                        classes={cx('menu-item')}
                    />
                    <Collection
                        title={'SALES'}
                        icons={<FontAwesomeIcon icon={faArrowsUpDown} />}
                        classes={cx('menu-item')}
                    />
                </div>
            </div>

            <>
                {!posts?.length ? (
                    <div />
                ) : (
                    <>
                        {posts.map((post) => (
                            <div key={post._id}>
                                <Link to="">
                                    <StartItems post={post} />
                                </Link>
                            </div>
                        ))}
                    </>
                )}
            </>
            <div className={cx('paginate')}>
                <Paper>
                    <Paginate page={page} navigate="/starts" />
                </Paper>
            </div>
        </div>
    );
}

export default Start;
