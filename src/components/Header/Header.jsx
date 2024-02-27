import React from 'react'
import { useSelector } from 'react-redux';
import { auth } from '../../utils/firebase.config';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
    const user = useSelector((store) => store.user);
    const navigate = useNavigate();

    function handleSignOut() {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/');
        }).catch((error) => {
            // An error happened.
            console.log('signout error: ', error);
        });
    }
    return (
        <div className='absolute flex flex-row items-center w-full'>
            <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix logo" />

            {user ? <button style={{ 'background': `url(${user?.photoURL}) no-repeat`, 'background-size': 'cover', 'backgroundColor': `rgba(255, 255, 255, 0.8)` }} className={`${styles['sign-out']} ml-auto p-1 h-10 bg-red-600`} onClick={handleSignOut}>Sign out</button> : <button className='ml-auto p-2'>Sign In</button>}
        </div>
    )
}

export default Header;