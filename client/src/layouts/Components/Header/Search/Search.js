import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

import styles from './Search.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '~/components/Button/Button';
import { getPostsBySearch } from '~/actions/posts';

const cx = classNames.bind(styles);
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Search = ({ placeholder, btnSearch = false }) => {
    const dispatch = useDispatch();
    const query = useQuery();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState('');
    // const [tags, setTags] = useState([]);
    const navigate = useNavigate();

    const searchPost = () => {
        if (search.trim()) {
            dispatch(getPostsBySearch({ search }));
            navigate(`/posts/admin?searchQuery=${search || 'none'}`);
        } else {
            navigate('/');
        }
    };

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            searchPost();
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
                    onKeyPress={handleKeyPress}
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
