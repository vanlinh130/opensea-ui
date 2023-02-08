import React from 'react';
import classNames from 'classnames/bind';

import styles from './NFT.module.scss';
import NFTItem from './NFTItem/NFTItem';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

const NFT = () => { 

    const posts = useSelector((state) => state.posts)

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
                { !posts.length ? <div/> : (
                    <>
                        {posts.map(post => (
                            <div key={post._id}>
                                <NFTItem post={post} />
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default NFT;