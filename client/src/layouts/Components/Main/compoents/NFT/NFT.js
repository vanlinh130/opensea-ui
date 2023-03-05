import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './NFT.module.scss';
import NFTItem from './NFTItem/NFTItem';
const cx = classNames.bind(styles);

const NFT = ({ title }) => {
    const { posts, isLoading } = useSelector((state) => state.posts);

    if (!posts.length && !isLoading) return 'No posts';

    return (
        <div className={cx('nft')}>
            <div className={cx('nft-heading')}>
                <div>
                    <h2>{title}</h2>
                    <span>Get comfortable with the basics.</span>
                </div>
                <button>Learn more</button>
            </div>
            <div className={cx('nft-wrapper')}>
                {isLoading ? (
                    <div />
                ) : (
                    <>
                        {posts.map((post) => (
                            <div key={post._id}>
                                <Link to="/detail">
                                    <NFTItem post={post} />
                                </Link>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default NFT;
