import React from 'react';
import classNames from 'classnames/bind';

import styles from './LearnMore.mudule.scss';
import Header from '~/components/Header/Header';

const cx = classNames.bind(styles);

const LearnMore = () => {
    return (
        <>
            <Header title="LEARN MORE" avatar />
            <div className={cx()}></div>
        </>
    );
};

export default LearnMore;
