import React, { Component } from 'react';
import '../styles/tours.scss'
import Tour from './Tour';

const Tours = ({tours, removeTour}) =>{
    
    return(
        <section>
            <div className='title'>
                <h2>our tours</h2>
                <div className='underline'></div>
            </div>
            <div>
            {tours.map(tour=>{
                const {id} = tour
                return(
                    <Tour key={id} {...tour} removeTour={removeTour}/>
                    
                )
            })}
            </div>
        </section>
    )
}

export default Tours