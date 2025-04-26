import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faList, faTable, faBorderAll, faChartBar } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import styles from './Detail.module.scss';
import Header from './../Header/Header';
import CheckName from '~/components/CheckName/CheckName';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getPost, getPostsBySearch } from '~/actions/posts';
import { CircularProgress, Paper } from '@mui/material';
import { SearchPost } from '~/components/Search';
import DetailName from './DetailName/DetailName';

const cx = classNames.bind(styles);

const Detail = () => {
    const { post, posts, isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPost(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    useEffect(() => {
        if (post) {
            dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join('#') }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [post]);

    if (!post) return null;

    if (isLoading) {
        return (
            <Paper elevation={6}>
                <CircularProgress size="7em" />
            </Paper>
        );
    }

    const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

    const openPost = (_id) => {
        navigate(`/details/${_id}`);
    };

    return (
        <>
            <Header />
            <div className={cx('detail-container')}>
                <div className={cx('detail-cover')}>
                    <img src={images.detail_cover} alt="images-cover" />
                </div>
                <div className={cx('detail-avatar')}>
                    <div className={cx('avatar-img')}>
                        <img src={post.selectedFile} alt="images-avatar" />
                    </div>
                </div>

                <DetailName post={post} />

                <div className={cx('detail-heading')}>
                    <span>
                        By<h3> {post.title}</h3>
                    </span>
                    <CheckName />
                </div>

                <div className={cx('detail-content')}>
                    <div className={cx('content-price')}>
                        <div className={cx('content-price-lists')}>
                            <div className={cx('price-item')}>
                                <span>Items</span>
                                <b>{post.tags}</b>
                            </div>
                            <div className={cx('price-item')}>
                                <span>Created</span>
                                <b>Dec 2021</b>
                            </div>
                            <div className={cx('price-item')}>
                                <span>Creator earnings</span>
                                <b>5%</b>
                            </div>
                            <div className={cx('price-item')}>
                                <span>Chain</span>
                                <b>Ethereum</b>
                            </div>
                            <div className={cx('price-item')}>
                                <span>Category </span>
                                <b>PFPs</b>
                            </div>
                        </div>

                        <div className={cx('content-text')}>
                            <p>{post.message}</p>
                            <div className={cx('content-text-more')}>
                                <span>See more</span>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                        </div>

                        <div className={cx('content-eth-lists')}>
                            <div className={cx('content-eth-item')}>
                                <b>{post.tags} ETH</b>
                                <span>total volume</span>
                            </div>
                            <div className={cx('content-eth-item')}>
                                <b>0,64 ETH</b>
                                <span>floor price</span>
                            </div>
                            <div className={cx('content-eth-item')}>
                                <b>0,62 WETH</b>
                                <span>best offer</span>
                            </div>
                            <div className={cx('content-eth-item')}>
                                <b>6%</b>
                                <span>listed</span>
                            </div>
                            <div className={cx('content-eth-item')}>
                                <b>6.979</b>
                                <span>owners</span>
                            </div>
                            <div className={cx('content-eth-item')}>
                                <b>33%</b>
                                <span>unique owners</span>
                            </div>
                        </div>
                    </div>

                    <div className={cx('content-type')}>
                        <h3>Items</h3>
                        <h3>Analytics</h3>
                        <h3>Activity</h3>
                    </div>

                    <div className={cx('content-nav')}>
                        <div className={cx('content-nav-header')}>
                            <div className={cx('icon-bar')}>
                                <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div className={cx('search')}>
                                <SearchPost placeholder="Search by name or attribute" />
                            </div>
                            <div className={cx('search-price')}>
                                <div className={cx('search-icon')}>
                                    <h3>Price low to high</h3>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                            </div>
                            <div className={cx('icon-list')}>
                                <button>
                                    <FontAwesomeIcon className={cx('icon-item')} icon={faList} />
                                </button>
                                <button>
                                    <FontAwesomeIcon className={cx('icon-item')} icon={faTable} />
                                </button>
                                <button>
                                    <FontAwesomeIcon className={cx('icon-item')} icon={faBorderAll} />
                                </button>
                                <button>
                                    <FontAwesomeIcon className={cx('icon-item')} icon={faChartBar} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {recommendedPosts.length && (
                        <div className={cx('detail-list')}>
                            {recommendedPosts.map(({ title, name, likes, selectedFile, _id }) => (
                                <div className={cx('detail-item')} onClick={() => openPost(_id)} key={_id}>
                                    <div className={cx('item-image')}>
                                        <img src={selectedFile} alt="images" />
                                    </div>
                                    <div className={cx('item-content')}>
                                        <span>{title}</span>
                                        <h3>{name}</h3>
                                        <p>You might a like: {likes.length}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Detail;
