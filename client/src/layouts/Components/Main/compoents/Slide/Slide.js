import classNames from 'classnames/bind';
import Marquee from 'react-fast-marquee';
import { useSelector } from 'react-redux';

import SlideItem from './SlideItem/SlideItem';
import styles from './Slide.module.scss';
const cx = classNames.bind(styles);

function Slide({ title }) {
    const { posts, isLoading } = useSelector((state) => state.posts);

    if (!posts.length && !isLoading) return 'No posts';

    return (
        <div className={cx('slide')}>
            <div className={cx('slide-content')}>
                <h1>{title}</h1>
            </div>
            <Marquee>
                <div className={cx('slide-list')}>
                    {isLoading ? (
                        <div />
                    ) : (
                        <>
                            {posts.map((post) => (
                                <div key={post._id}>
                                    <SlideItem post={post} />
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
