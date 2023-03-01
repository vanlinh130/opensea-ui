import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './LearnMore.module.scss';
import Header from '~/components/Header/Header';
import images from '~/assets/images';
import Footer from '~/layouts/Components/Footer/Footer';

const cx = classNames.bind(styles);

const LearnMore = () => {
    return (
        <>
            <Header title="LEARN MORE" avatar classes={cx('header')} />
            <section className={cx('container', 'wrapper')}>
                <div className={cx('hero-wrapper')}>
                    <div className={cx('hero-content')}>
                        <div className={cx('hero-content-logo')}>
                            <img
                                className={cx('logo-one')}
                                src="https://assets-global.website-files.com/639756150a63ed9f6f910b94/63a22e35f087ff1d14c249a6_Ship.svg"
                                alt="images-logo"
                            />
                            <img
                                className={cx('logo-tow')}
                                src="https://assets-global.website-files.com/639756150a63ed9f6f910b94/63a260a2fa137f64c33763e9_Waves%20compressed.gif"
                                alt="images-logo"
                            />
                        </div>
                        <h1 className={cx('hero-heading')}>Make waves. Drop on OpenSea.</h1>
                        <div className={cx('hero-description')}>Partner with the most trusted name in NFTs.</div>
                        <button className={cx('hero-btn')}>Request early access</button>
                    </div>
                    <div className={cx('hero-image')}>
                        <img src={images.drop_learn_more} alt="" />
                    </div>
                </div>
            </section>

            <div className={cx('sub-wrapper', 'wrapper')}>
                <div className={cx('sub-hero-wrapper')}>
                    <h2>The world’s top NFT creators and brands rely on OpenSea to reach new audiences</h2>
                </div>
            </div>

            <div className={cx('partners-wrapper', 'wrapper')}>
                <div className={cx('partners-list')}>
                    <div className={cx('partners-item')}>
                        <img src={images.drop_partners_1} alt="partner-images" />
                    </div>
                    <div className={cx('partners-item')}>
                        <img src={images.drop_partners_2} alt="partner-images" />
                    </div>
                    <div className={cx('partners-item')}>
                        <img src={images.drop_partners_3} alt="partner-images" />
                    </div>
                    <div className={cx('partners-item')}>
                        <img src={images.drop_partners_4} alt="partner-images" />
                    </div>
                    <div className={cx('partners-item')}>
                        <img src={images.drop_partners_5} alt="partner-images" />
                    </div>
                    <div className={cx('partners-item')}>
                        <img src={images.drop_partners_6} alt="partner-images" />
                    </div>
                    <div className={cx('partners-item')}>
                        <img src={images.drop_partners_7} alt="partner-images" />
                    </div>
                </div>
            </div>

            <div className={cx('why-drop-wrapper', 'wrapper')}>
                <div className={cx('why-drop')}>
                    <div className={cx('why-drop-column-wrapper')}>
                        <div className={cx('why-drop_left-col')}>
                            <img src={images.drop_why_1} className={cx('drop-image-one')} alt="drop-images" />
                            <img src={images.drop_why_2} className={cx('drop-image-tow')} alt="drop-images" />
                            <img src={images.drop_why_3} className={cx('drop-image-three')} alt="drop-images" />
                            <img src={images.drop_why_4} className={cx('drop-image-four')} alt="drop-images" />
                        </div>
                        <div className={cx('why-drop-right-col')}>
                            <div className={cx('why-drop-content')}>
                                <h2>Why drop a collection on OpenSea?</h2>
                                <span>
                                    With OpenSea, your drop can reach the largest NFT audience in the world. Tell your
                                    story with all of the sizzle and none of the work required of a custom web page. Go
                                    zero-to-one on any EVM chain in minutes. And, have confidence that you and your
                                    community will be protected every step of the way.
                                </span>
                                <button className={cx('why-drop-btn')}>Request early access</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('values-wrapper', 'wrapper')}>
                <div className={cx('values-lists')}>
                    <div className={cx('values-item')}>
                        <div className={cx('values-icon')}>
                            <img src={images.drop_values_1} alt="values-images" />
                        </div>
                        <div className={cx('values-content')}>
                            <h4 className={cx('values-heading')}>Save time</h4>
                            <span className={cx('values-des')}>
                                Build your brand without constraints. Configure allowlists, adjust drop mechanics, and
                                personalize your landing page across Ethereum, Polygon and other EVM chains.
                            </span>
                        </div>
                    </div>
                    <div className={cx('values-item')}>
                        <div className={cx('values-icon')}>
                            <img src={images.drop_values_2} alt="values-images" />
                        </div>
                        <div className={cx('values-content')}>
                            <h4 className={cx('values-heading')}>Customize your experience</h4>
                            <span className={cx('values-des')}>
                                We’ve built easy-to-use tools to help you get started quickly. Enjoy the freedom to
                                focus on the things that matter most – like growing & supporting your community.
                            </span>
                        </div>
                    </div>
                    <div className={cx('values-item')}>
                        <div className={cx('values-icon')}>
                            <img src={images.drop_values_3} alt="values-images" />
                        </div>
                        <div className={cx('values-content')}>
                            <h4 className={cx('values-heading')}>Drop with confidence</h4>
                            <span className={cx('values-des')}>
                                Our audited SeaDrop smart contract makes us the safest place to mint. Use the NFT
                                ecosystem’s most sophisticated copymint detection and theft prevention technologies.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('faq-wrapper', 'wrapper')}>
                <div className={cx('faq-content-wrapper')}>
                    <h1>FAQ</h1>
                    <div className={cx('faq-lists')}>
                        <div className={cx('faq-item')}>
                            <h5>Can anyone drop on OpenSea?</h5>
                            <FontAwesomeIcon icon={faChevronDown} className={cx('faq-icon')} />
                        </div>
                        <div className={cx('faq-item')}>
                            <h5>Will I be able to use my own contract?</h5>
                            <FontAwesomeIcon icon={faChevronDown} className={cx('faq-icon')} />
                        </div>
                        <div className={cx('faq-item')}>
                            <h5>What will my landing page look like?</h5>
                            <FontAwesomeIcon icon={faChevronDown} className={cx('faq-icon')} />
                        </div>
                        <div className={cx('faq-item')}>
                            <h5>Will my drop automatically be added to OpenSea's drop calendar?</h5>
                            <FontAwesomeIcon icon={faChevronDown} className={cx('faq-icon')} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('cta-wrapper', 'wrapper')}>
                <div className={cx('cta-padding-wrapper')}>
                    <div className={cx('cta-content')}>
                        <div className={cx('cta-logo')}>
                            <img
                                className={cx('logo-one')}
                                src="https://assets-global.website-files.com/639756150a63ed9f6f910b94/63a22e35f087ff1d14c249a6_Ship.svg"
                                alt="images-logo"
                            />
                            <img
                                className={cx('logo-tow')}
                                src="https://assets-global.website-files.com/639756150a63ed9f6f910b94/63a260a2fa137f64c33763e9_Waves%20compressed.gif"
                                alt="images-logo"
                            />
                        </div>
                        <h2>Ready to drop? Get in touch.</h2>
                        <button className={cx('cta-btn')}>Request early access</button>
                    </div>
                </div>
            </div>

            <Footer classes={cx('footer')}></Footer>
        </>
    );
};

export default LearnMore;
