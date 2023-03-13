import React from 'react';
import classNames from 'classnames/bind';
import styles from './Partners.module.scss';
import Header from '~/components/Header/Header';
import images from '~/assets/images';
import PartnersItem from './PartnersItem/PartnersItem';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Footer from '~/layouts/Components/Footer/Footer';

const cx = classNames.bind(styles);

const Partners = () => {
    const { posts } = useSelector((state) => state.posts);

    return (
        <>
            <Header avatar></Header>
            <div className={cx('container')}>
                {/* marketplace */}
                <div className={cx('marketplace')}>
                    <div className={cx('marketplace-left')}>
                        <h1>Welcome to the world’s largest NFT marketplace.</h1>
                        <p>
                            At OpenSea, we're excited about a brand new type of digital good often referred to as a
                            non-fungible token, or NFT. NFTs have exciting new properties: they’re unique, provably
                            scarce, liquid, and usable across multiple applications.
                        </p>
                        <p>
                            We’re proud to be the first and largest marketplace for user-owned digital goods, with
                            everything you need to buy and sell them in one place.<span> Learn more about us</span>
                        </p>
                    </div>
                    <div className={cx('marketplace-right')}>
                        <img src={images.resource_partners} alt="images-marketplace" />
                    </div>
                </div>

                {/*why partner*/}
                <div className={cx('why-partner')}>
                    <div className={cx('why-partner-heading')}>
                        <h2>Why partner with OpenSea</h2>
                        <p>
                            While we take pride in being the first and largest marketplace and in our robust feature
                            set, we also help our partners succeed with the following...
                        </p>
                    </div>

                    <div className={cx('why-partner-list')}>
                        <div className={cx('why-partner-item')}>
                            <img src={images.resource_partners_1} alt="images-why" />
                            <h3>Reach Millions</h3>
                            <p>
                                With over thousands of users and followers, we can help you reach a large audience of
                                collectors
                            </p>
                        </div>
                        <div className={cx('why-partner-item')}>
                            <img src={images.resource_partners_2} alt="images-why" />
                            <h3>Reach Millions</h3>
                            <p>
                                With over thousands of users and followers, we can help you reach a large audience of
                                collectors
                            </p>
                        </div>
                        <div className={cx('why-partner-item')}>
                            <img src={images.resource_partners_3} alt="images-why" />
                            <h3>Spend Less</h3>
                            <p>
                                Compared with other NFT marketplaces, we have lowest fees in the space allowing you to
                                spend less with your created collection
                            </p>
                        </div>
                        <div className={cx('why-partner-item')}>
                            <img src={images.resource_partners_4} alt="images-why" />
                            <h3>Robust Features</h3>
                            <p>
                                With the most powerful way for users to buy and sell NFTS, we offer the most advanced
                                features
                            </p>
                        </div>
                        <div className={cx('why-partner-item')}>
                            <img src={images.resource_partners_5} alt="images-why" />
                            <h3>Breadth of Categories</h3>
                            <p>
                                With over thousands of collections, we are proud to host the widest range of categories,
                                ranging from digital to physical NFTs
                            </p>
                        </div>
                    </div>
                </div>

                {/* who partnered */}
                <div className={cx('who-partnered')}>
                    <div className={cx('who-partnered-heading')}>
                        <h2>Who has partnered with us</h2>
                        <p>
                            We've collaborated with high-profile organizations and celebrities and generated millions of
                            dollars in revenue in the process.
                        </p>
                    </div>

                    <div className={cx('who-partnered-list')}>
                        <>
                            {!posts?.length ? (
                                <div />
                            ) : (
                                <>
                                    {posts.map((post) => (
                                        <div key={post._id} className={cx('partner-item')}>
                                            <PartnersItem post={post} />
                                        </div>
                                    ))}
                                </>
                            )}
                        </>
                    </div>
                </div>

                {/* Fags */}
                <div className={cx('faqs')}>
                    <div className={cx('faqs-heading')}>
                        <h2>FAQs</h2>
                        <p>For more FAQs visit our partnership page in our help center</p>
                    </div>
                    <div className={cx('faqs-list')}>
                        <div className={cx('faqs-item')}>
                            <h3>What is an NFT? What makes them so great?</h3>
                            <FontAwesomeIcon icon={faAngleDown} className={cx('faqs-icon')} />
                        </div>
                        <div className={cx('faqs-item')}>
                            <h3>What is an NFT? What makes them so great?</h3>
                            <FontAwesomeIcon icon={faAngleDown} className={cx('faqs-icon')} />
                        </div>
                        <div className={cx('faqs-item')}>
                            <h3>What is an NFT? What makes them so great?</h3>
                            <FontAwesomeIcon icon={faAngleDown} className={cx('faqs-icon')} />
                        </div>
                        <div className={cx('faqs-item')}>
                            <h3>What is an NFT? What makes them so great?</h3>
                            <FontAwesomeIcon icon={faAngleDown} className={cx('faqs-icon')} />
                        </div>
                    </div>
                </div>

                {/* info */}
                <div className={cx('info')}>
                    <div className={cx('info-list')}>
                        <div className={cx('info-left')}>
                            <img src={images.resource_partners_info_1} alt="icon-images" />
                            <p>
                                OpenSea is one of the most exciting, important companies in the world right now because
                                it's the portal to the new digital economy. If you're interested in shaping a new
                                business model for creators, this is the team to join.
                            </p>
                            <h5>Katie Haun</h5>
                            <span>CEO and Founder, Haun Ventures</span>
                        </div>
                        <div className={cx('info-right')}>
                            <img src={images.resource_partners_info_2} alt="images" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer btnFooter={false} />
        </>
    );
};

export default Partners;
