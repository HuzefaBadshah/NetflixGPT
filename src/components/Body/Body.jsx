import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Browse from '../Browse/Browse';
import Login from '../Login/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebase.config';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../../redux/slice/userSlice';

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        }
    ]);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const { uid, displayName, email } = user;
            dispatch(addUser({ uid, displayName, email }));
            // ...
        } else {
            // User is signed out
            // ...
            dispatch(removeUser(null));
        }
    });

    return (
        <RouterProvider router={appRouter} />
    )
}

export default Body;