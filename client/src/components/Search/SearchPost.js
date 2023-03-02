import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './SearchPost.module.scss';
import { getPostsBySearch } from '~/actions/posts';

const cx = classNames.bind(styles);

const SearchPost = ({ placeholder, navigates, navigateHome }) => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const inputRef = useRef();

    const searchPost = () => {
        if (search.trim()) {
            dispatch(getPostsBySearch({ search }));
            navigate(`${navigates}?searchQuery=${search || 'none'}`);
            setSearch('');
            inputRef.current.focus();
        } else {
            navigate(navigateHome);
        }
    };
    return (
        <div className={cx('search')}>
            <div className={cx('search-input')}>
                <input
                    ref={inputRef}
                    name="search"
                    value={search}
                    placeholder={placeholder}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className={cx('open-using')}>/</div>
            </div>
            <button className={cx('btn-search')} onClick={searchPost}>
                <FontAwesomeIcon icon={faSearch} className={cx('icon-search')} />
            </button>
        </div>
    );
};

export default SearchPost;
