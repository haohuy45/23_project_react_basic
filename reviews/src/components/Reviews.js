import React, { Component, useState } from 'react';
import {FaQuoteRight} from 'react-icons/fa'; 
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import data from '../data'
import '../styles/review.scss'

const Reviews = (reviews) => {
  const [index, setIndex] = useState(0)
  const {id, name, job, image, text} = data[index]

  const checkNumber = (number) =>{
    if(number > data.length -1){
      return 0;
    }
    if(number < 0){
      return data.length -1
    }
    return number
  }

  const nextBtn = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex)
    })
  }

  const prevBtn = () => {
    setIndex((index) =>{
      let newIndex = index - 1;
      return checkNumber(newIndex)
    })
  }
  const randomBtn = ()=>{
    let newIndex = Math.floor(Math.random() * data.length)
    
    setIndex(newIndex)
    console.log(newIndex)
  }
  return (
    <article className='review' key={id}>
      <div className='image-container'>
        <img src={image} className='person-img' />
        <span className='quote-icon'><FaQuoteRight/></span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={nextBtn}><BsChevronLeft/></button>
        <button className='next-btn' onClick={prevBtn}><BsChevronRight/></button>
      </div>
      <button className='random-btn' onClick={randomBtn}>Surprise Me</button>
    </article>
  )
}

export default Reviews