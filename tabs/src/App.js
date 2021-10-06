import {useEffect, useState} from 'react'
import './App.scss';
import Loader from './Loader';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [value, setValue] = useState(0)

  const fetchJob = async() =>{
    try {
      setLoading(true)
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchJob();
  }, [])

  if(loading){
    return <Loader/>
  }
  const { company, dates, duties, title } = jobs[value]
  return (
    <main>
      <section className='section'>
        <div className='title'>
          <h2>Experience</h2>
          <div className='underline'></div>
        </div>
        <div className='jobs-center'>
          <div className='btn-container'>
            {jobs.map((job, index)=>{
              return(
                <button className={`job-btn ${index === value && 'active'}`} key={job.id} onClick={() => setValue(index)}>{job.company}</button>

              )
            })}
          </div>
          <article className='job-info'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className='job-date'>{dates}</p>
            {duties.map(duty=>{
              return(
                <div className='job-desc'>
                  <FaAngleDoubleRight/>

                  <p>{duty}</p>
                </div>
              )
            })}
          </article>
        </div>
      </section>
    </main>
  );
}

export default App;
