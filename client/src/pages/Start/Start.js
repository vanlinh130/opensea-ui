import classNames from 'classnames/bind';
import styles from './Start.module.scss';
import { Chains, ChainsIcons, ChevronDown } from '~/components/Chain';
import { IconOne, IconTow, IconThree, Iconfour, Iconfive, IconSix, IconServer, Iconeight } from '~/components/Icons';
import Action from '~/components/Action/Action';

const cx = classNames.bind(styles);

function Start() {
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
            <div className={cx('start-nav')}></div>
        </div>
    );
}

export default Start;
