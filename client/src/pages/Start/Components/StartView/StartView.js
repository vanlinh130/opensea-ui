import React from 'react';
import classNames from 'classnames/bind';

import { Chains, ChainsIcons, ChevronDown } from '~/components/Chain';
import { IconOne, IconTow, IconThree, Iconfour, Iconfive, IconSix, IconServer, Iconeight } from '~/components/Icons';
import styles from './StartView.module.scss';

const cx = classNames.bind(styles);

const StartView = () => {
    return (
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
    );
};

export default StartView;
