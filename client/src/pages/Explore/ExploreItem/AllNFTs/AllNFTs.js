import React from 'react';
import Marquee from 'react-fast-marquee';
import { useSelector } from 'react-redux';
import { Content, HeaderExplore } from '../../Components';

const AllNFTs = () => {
    const { posts } = useSelector((state) => state.posts);

    return (
        <>
            <HeaderExplore />
            <Marquee>
                <>
                    {!posts?.length ? (
                        <div />
                    ) : (
                        <>
                            {posts.map((post) => (
                                <div key={post._id}>
                                    <Content post={post} allNFTs />
                                </div>
                            ))}
                        </>
                    )}
                </>
            </Marquee>
        </>
    );
};

export default AllNFTs;
