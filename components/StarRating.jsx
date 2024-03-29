import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}

                        />
                        <FaStar
                            className='star'
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "E4E5E9"}
                            size={25}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseOut={() => setHover(null)}
                        />
                    </label>
                );
            })}
            {/* <P>Rating is {rating}</P> */}
        </div>
    );
}

export default StarRating
