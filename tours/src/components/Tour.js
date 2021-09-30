import React, { Component, useState } from 'react';
import '../styles/tours.scss'

const Tour = ({id, image, name, info, price, removeTour}) => {
    const [readMore, setReadMore] = useState(false)
    
    return (
        <article className='single-tour'>
            <img src={image} />
            <div className='footer'>
                <div className='tour-info'>
                    <h4>{name}</h4>
                    <h4 className='tour-price'>{`$ ${price}`}</h4>
                </div>
                <p>
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'show less' : '  read more'}
                    </button>
                </p>
                <button type='button' className='btn-delete' onClick={()=> removeTour(id)}>not interested</button>
            </div>
        </article>
    )
}

export default Tour