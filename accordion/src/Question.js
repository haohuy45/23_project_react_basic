import React, { Component, useState } from 'react';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';

const Question = ({ title, info }) => {
    const [show, setShow] = useState(false)

    return (

        <article className='question'>
            <header>
                <h4>{title}</h4>
                <button onClick={() => setShow(!show)}>
                    {show ? <FiMinusCircle /> : <FiPlusCircle />}
                </button>
            </header>
            {show && <p>{info}</p>}
        </article>

    )
}

export default Question