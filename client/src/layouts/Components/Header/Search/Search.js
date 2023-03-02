import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

import styles from './Search.module.scss';
import { useNavigate } from 'react-router-dom';
import Button from '~/components/Button/Button';
import { getPostsBySearch } from '~/actions/posts';

const cx = classNames.bind(styles);

const Search = ({ placeholder, btnSearch = false }) => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const searchPost = () => {
        if (search.trim()) {
            dispatch(getPostsBySearch({ search }));
            navigate(`/posts/search?searchQuery=${search || 'none'}`);
        } else {
            navigate('/posts');
        }
    };

    return (
        <div className={cx('search')}>
            <div className={cx('search-input')}>
                <FontAwesomeIcon className={cx('icon-search')} icon={faMagnifyingGlass} />
                <input
                    name="search"
                    value={search}
                    placeholder={placeholder}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className={cx('open-using')}>/</div>
            </div>
            {btnSearch && (
                <Button primary className={cx('btn-search')} onClick={searchPost}>
                    <FontAwesomeIcon icon={faSearch} />
                    <span>Search</span>
                </Button>
            )}
        </div>
    );
};

export default Search;
