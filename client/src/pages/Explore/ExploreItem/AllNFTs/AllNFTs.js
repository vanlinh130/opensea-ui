import React from 'react';
import Marquee from 'react-fast-marquee';
import { useSelector } from 'react-redux';
import ExploreItems from '../ExploreItems/ExploreItems';

const AllNFTs = () => {
    const { posts } = useSelector((state) => state.posts);

    return (
        <>
            <Marquee>
                <>
                    {!posts?.length ? (
                        <div />
                    ) : (
                        <>
                            {posts.map((post) => (
                                <div key={post._id}>
                                    <ExploreItems post={post} allNFTs />
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
