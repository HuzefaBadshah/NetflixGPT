import React from 'react'
import { useSelector } from 'react-redux';
import Header from '../Header/Header';

const Browse = () => {
    const user = useSelector((store) => store.user);
    return (
        <div>
            <Header />
            <img src={user?.photoURL || ''} />
        </div>
    )
}

export default Browse;