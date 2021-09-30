import './App.css';
import {useState} from 'react'
import person from './data'

function App() {
  const [numbers, setNumbers] = useState(person)
  return (
    <main>
      <section className='container'>
        <h3>{numbers.length} birthdays today</h3>
        {numbers.map((people) => {
          const {id, name, age, image} = people
          return (
            <article className='person' key={id}>
              <img src={image} alt='Bertie Yates' />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </article>
          )
        })}
        <button className='btn' onClick={()=>setNumbers([])}>Clear All</button>
      </section>
    </main>
  )
}

export default App;
