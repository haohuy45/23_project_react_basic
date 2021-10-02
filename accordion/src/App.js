
import './App.scss';
import Question from './Question';
import data from './data';
import { useState } from 'react';


function App() {
  const [questions, setQuestions] = useState(data)

  return (
    <main>
      <div className='container'>
        <h3>Questions And Answers About Login</h3>
        
        <section className='info'>
            {questions.map(question=>{
                const {id} = question
                return(
                  <Question {...question} key={id}/>
                )
            })}
        </section>
      </div>
    </main>

  );
}

export default App;
