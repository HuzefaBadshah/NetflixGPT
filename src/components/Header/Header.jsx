import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../utils/firebase.config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { addUser, removeUser } from '../../redux/slice/userSlice';
import { netflixLogo } from '../../utils/constants';

const Header = () => {
    const user = useSelector((store) => store.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // console.log('user in header: ', user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, displayName, email, photoURL } = user;
                dispatch(addUser({ uid, displayName, email, photoURL }));
                navigate('/browse');
                // ...
            } else {
                // User is signed out
                // ...
                dispatch(removeUser(null));
                navigate('/');
            }
        });
        return () => { unsubscribe() };
    }, []);

    function handleSignOut() {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            console.log('signout error: ', error);
        });
    }
    return (
        <div className='absolute flex flex-row items-center w-full z-10'>
            <img className='w-44' src={netflixLogo} alt="Netflix logo" />

            {user ? <div className={`${styles['sign-out-container']} ml-auto text-end mr-3`}>
                <img src={user?.photoURL || ''} className='mr-2' />
                <button className={`${styles['sign-out']}  p-1 h-10 bg-red-600`} onClick={handleSignOut}>Sign out</button>
            </div> : <button className='ml-auto p-2'>Sign In</button>}
        </div>
    )
}

export default Header;