import React, { useRef, useState } from 'react';
import styles from './Login.module.scss';
import Header from '../Header/Header';
import { checkValidateData } from '../../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../utils/firebase.config';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/slice/userSlice';
import { BG_URL, userImage } from '../../utils/constants';

const Login = () => {
    const dispatch = useDispatch();
    const [isSignin, setIsSignin] = useState(true);
    const [error, setError] = useState(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const name = useRef(null);
    const navigate = useNavigate();

    function toggleSignIn() {
        setIsSignin(!isSignin);
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const message = checkValidateData(email, password);
        if (message) {
            setError(message);
            return;
        }

        if (isSignin) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: userImage
                    }).then(() => {
                        // Profile updated!
                        const { uid, displayName, email, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid, displayName, email, photoURL }));
                        setError(null);
                        navigate("/browse");
                    }).catch((error) => {
                        // An error occurred
                        setError(error.message);
                    });

                    console.log('user: ', auth.currentUser);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorCode + "-" + errorMessage);
                });
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    // const { uid, displayName, email, photoURL } = userCredential.user;
                    // dispatch(addUser({ uid, displayName, email, photoURL }));
                    setError(null);
                    navigate("/browse");
                    console.log('user: ', userCredential.user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorCode + "-" + errorMessage);
                });

        }

    }

    return (
        <div className={`${styles.login}`}>
            <Header />
            <div className={`${styles["netflix-bg-img"]} absolute`}>
                <img src={BG_URL} alt="Netflix background image" />
            </div>
            <form className={`absolute ${styles['login__form']} flex flex-col p-12`}>
                <h2>{!isSignin ? 'Sign In' : 'Sign Up'}</h2>
                {
                    isSignin && <input ref={name} type="text" name="name" placeholder='Enter Name' className='p-2 m-2' />
                }
                <input ref={emailRef} type='text' name='email' placeholder='Enter Email' className='p-2 m-2' />
                <input ref={passwordRef} type='password' name='password' placeholder='Enter Password' className='p-2 m-2' />

                {error && <p className='text-red-500 font-bold m-3'>{error}</p>}

                <button onClick={onSubmitHandler} className={`p-2 ${styles['login__submit']} w-1/2 ml-2 mt-3`}>Submit</button>

                <p>{!isSignin ? 'New to Netflix?' : 'Already a user?'}
                    <b onClick={toggleSignIn} className='ml-1 mt-2 inline-block'>Sign {!isSignin ? 'up' : 'in'} now.</b>
                </p>
            </form>
        </div>
    )
}

export default Login