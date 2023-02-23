import classNames from 'classnames/bind';
import { faArrowsUpDown, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Start.module.scss';
import { Chains, ChainsIcons, ChevronDown } from '~/components/Chain';
import { IconOne, IconTow, IconThree, Iconfour, Iconfive, IconSix, IconServer, Iconeight } from '~/components/Icons';
import Action from '~/components/Action/Action';
import Collection from '~/components/Collection/Collection';
import Paginate from '~/components/Pagination/Pagination';
import StartItems from './StartItem/StartItems';

const cx = classNames.bind(styles);

function Start() {
    const posts = useSelector((state) => state.posts);

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
                {!posts.length ? (
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

            <Paginate />
        </div>
    );
}

export default Start;
