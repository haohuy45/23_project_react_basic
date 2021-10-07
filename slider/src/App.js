
import { useEffect, useState } from 'react';
import './App.scss';
import data from './data'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';
import { FaQuoteRight } from 'react-icons/fa';

function App() {
  const [value, setValue] = useState(0)
  const [people, setPeople] = useState(data)

  const nextSlide = () =>{
    setValue((oldValue)=>{
      let newValue = oldValue + 1;
      if(newValue > people.length -1){
        return 0
      }
      return newValue
    })
  }

  const prevSlide = () =>{
    setValue((oldValue) => {
      let newValue = oldValue - 1;
      if(newValue < 0){
        return people.length -1;
      }
      return newValue
    })
  }

  useEffect(()=>{
    let slider = setInterval(()=>{
      setValue((oldValue) => {
        let newValue = oldValue + 1;
        if(newValue > people.length -1){
          return 0
        }
        return newValue
      })
    }, 50000)
    return () => {
      clearInterval(slider)
    }
  }, [value])
  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>
          Review
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person

          let position = 'nextSlide';
          if(personIndex === value){
            position = 'activeSlide'
          }
          if(personIndex === value -1 || (value === 0 && personIndex === people.length -1)){
            position = 'lastSlide'
          }
          return (
            <article className={position} key={id}>
              <img src={image} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='quote'/>
            </article>

          )
        })}
        <button className='prev' onClick={prevSlide}><BsFillArrowLeftSquareFill/></button>
        <button className='next' onClick={nextSlide}><BsFillArrowRightSquareFill/></button>

      </div>
    </section>
  );
}

export default App;
