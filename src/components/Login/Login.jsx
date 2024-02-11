import React, { useState } from 'react';
import styles from './Login.module.scss';
import Header from '../Header/Header';

const Login = () => {
    const [isSignin, setIsSignin] = useState(true);

    function toggleSignIn() {
        setIsSignin(!isSignin);
    }

    return (
        <div className={`${styles.login}`}>
            <Header />
            <div className={`${styles["netflix-bg-img"]} absolute`}>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="Netflix background image" />
            </div>
            <form className={`absolute ${styles['login__form']} flex flex-col p-12`}>
                <h2>{!isSignin ? 'Sign In' : 'Sign Up'}</h2>
                {
                    isSignin && <input type="text" name="name" placeholder='Enter Name' className='p-2 m-2' />
                }
                <input type='text' name='email' placeholder='Enter Email' className='p-2 m-2' />
                <input type='password' name='password' placeholder='Enter Password' className='p-2 m-2' />
                <button className={`p-2 ${styles['login__submit']} w-1/2 ml-2 mt-3`}>Submit</button>
                <p onClick={toggleSignIn}>{isSignin ? 'New to Netflix?' : 'Already a user?'}<b className='ml-1 mt-2 inline-block'>Sign {isSignin ? 'up' : 'in'} now.</b></p>
            </form>
        </div>
    )
}

export default Login