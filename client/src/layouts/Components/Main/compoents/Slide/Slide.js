import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import { useSelector } from 'react-redux';

import SlideItem from './SlideItem/SlideItem';
import styles from './Slide.module.scss';
const cx = classNames.bind(styles);

function Slide({ title }) {
    const { posts } = useSelector((state) => state.posts);
    return (
        <div className={cx('slide')}>
            <div className={cx('slide-content')}>
                <h1>{title}</h1>
            </div>
            <Marquee>
                <div className={cx('slide-list')}>
                    {!posts?.length ? (
                        <div />
                    ) : (
                        <>
                            {posts.map((post) => (
                                <div key={post._id}>
                                    <Link to="/detail">
                                        <SlideItem post={post} />
                                    </Link>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </Marquee>
        </div>
    );
}

export default Slide;
