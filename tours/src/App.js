
import { useEffect, useState } from 'react';
import './App.scss';
import Loader from './components/Loader';
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)

  const removeTour = (id) =>{
    const newtours = tours.filter(tour => {
        return tour.id !== id
    })
    setTours(newtours)
}

  
  const fetchTours = async () => {
    try {
      setLoading(true)
      const response = await fetch(url)
      const tours = await response.json();
      setLoading(false)
      setTours(tours)


    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])
  if (loading) {
    return (
      <Loader/>
    )
  }
  console.log(tours)

  if(tours.length === 0){
    return(
      <main>
        <section>

          <div className='title'>
            <h2>no tour left</h2>
            <button className='btn' onClick={()=>fetchTours()}>Refresh</button>
          </div>
        </section>
      </main>
    )
  }


  return (
    <main>
      <Tours tours= {tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
