import React from 'react'
import { IMAGE_URL } from '../../../utils/constants'

const MovieCard = ({ poster_path }) => {
    return (
        <div className='w-36 mx-1'>
            <img src={`${IMAGE_URL}/${poster_path}`} alt="Movie Card" />
        </div>
    )
}

export default MovieCard