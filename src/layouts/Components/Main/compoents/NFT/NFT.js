import React from 'react';
import classNames from 'classnames/bind';

import styles from './NFT.module.scss';
import NFTItem from './NFTItem/NFTItem';

const cx = classNames.bind(styles);

const NFT = () => {
    return (
        <div className={cx('nft')}>
            <div className={cx('nft-heading')}>
                <div>
                    <h2>Photography NFT spotlight</h2>
                    <span>Get comfortable with the basics.</span>
                </div>
                <button>Learn more</button>
            </div>
            <div className={cx('nft-wrapper')}>
                <NFTItem />
                <NFTItem />
                <NFTItem />
                <NFTItem />
                <NFTItem />
            </div>
        </div>
    );
};

export default NFT;
