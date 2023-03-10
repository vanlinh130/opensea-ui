import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import styles from './Start.module.scss';
import { PaginationItem } from '~/components/Pagination';
import { HeaderNav, HeaderTitle, StartItems, StartMenu, StartView } from './Components';

const cx = classNames.bind(styles);

function Start() {
    const { posts } = useSelector((state) => state.posts);

    return (
        <div className={cx('start')}>
            <HeaderTitle title="Starts" />
            <HeaderNav classStarts />
            <StartView />
            <StartMenu />
            <>
                {!posts?.length ? (
                    <div />
                ) : (
                    <>
                        {posts.map((post) => (
                            <div key={post._id}>
                                <StartItems post={post} />
                            </div>
                        ))}
                    </>
                )}
            </>
            <PaginationItem navigate="/starts" />
        </div>
    );
}

export default Start;
