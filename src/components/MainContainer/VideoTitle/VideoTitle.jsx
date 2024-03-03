import React from 'react';
import styles from "./VideoTitle.module.scss";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className={`${styles['video-title']} rounded-lg`}>
            <h1 className='text-4xl font-bold text-white'>{title}</h1>
            <p className='md:inline-block py-4 text-lg text-white '>{overview}</p>
            <div className='flex justify-start'>
                <button className='bg-white text-black py-0.5 px-5 text-xl  rounded-lg hover:bg-opacity-80'>Play</button>
                <button className='md:inline-block mx-2  bg-gray-500 text-white p-2 
                px-3 text-xl bg-opacity-50 rounded-lg'>More Info</button>
            </div>
        </div>
    )
}


export default VideoTitle;