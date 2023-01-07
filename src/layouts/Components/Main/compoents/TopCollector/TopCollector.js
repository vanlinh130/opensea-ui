import React from 'react';
import classNames from 'classnames/bind';

import style from './TopCollector.module.scss';
import CollectorItem from './CollectorItem/CollectorItem';

const cx = classNames.bind(style);

const TopCollector = () => {
    return (
        <div className={cx('collector')}>
            <h2>Top collector buys today</h2>
            <div className={cx('collector-wrapper')}>
                <CollectorItem />
                <CollectorItem />
                <CollectorItem />
                <CollectorItem />
                <CollectorItem />
            </div>
        </div>
    );
};

export default TopCollector;
