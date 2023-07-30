
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

// updating state based on current state
  function handleDecrease(){
    setStep((c) => c - 1)
  }


  return(
    <>
  <div className='d-f'>
    <button onClick={handleDecrease }>&#45;</button>
    <h2>Steps  :  {step}</h2>
                      {/* call back function  */}
    <button onClick={() =>  setStep((c) => c + 1)}>&#43;</button>
  </div>
  <div className='d-f'>
    <button onClick={ () =>  setCount ((c) => c - step )} >&#45;</button>
    <h2>Count : {count} </h2>
    <button onClick={ () =>  setCount ((c) => c + step )}>&#43;</button>  </div>

    {count === 0 ? (
        <p style={{color:'red'}}>Today is : {date.toLocaleDateString()}</p>
      ) : count < 0 ?(<p>{Math.abs(count)} days ago was  {date.toLocaleDateString()}</p>):(<p> {count} days from today is {date.toLocaleDateString()}</p>)}
    </>
  )
}

export default App;


