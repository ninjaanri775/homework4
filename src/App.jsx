import { useState, useEffect  } from 'react'
import Card from "./components/card/card"
import './App.css'

function App() {
  const [sun, moon] = useState(false);
  const [count1, setCount1] = useState(0)
  const [todoes, todos] = useState([])

  

  useEffect(() => {
    const body = document.body;
    if (sun) {
        body.classList.add('moonin');
        body.classList.remove('sunnin');
        
    } else {
        body.classList.add('sunnin');
        body.classList.remove('moonin');
    }
}, [sun]);


  const addtodo = (e) => {
    
    const input = document.querySelector('.addintodo');
    e.preventDefault();

    const newnewtodo = input.value
    
    if (newnewtodo) {
      todos([newnewtodo, ...todoes])
      input.value = "";

    }


  }

  return (
    <div className='everything'>

      <div className="todoeings">
         <form onSubmit={addtodo}>
        
        <input type="text" className='addintodo' />
        <button type='submit'> Add Todo</button>
      </form>

      <ul>
      {todoes.map(el => (

        <li>{el}</li>
        ))}

      </ul>
      </div>

      <div className="countin">
        <h1>{count1}</h1>
        <button onClick={() => {
          setCount1(count1 +1)
        }}>increase</button>

        <button onClick={() => {
          setCount1(count1 -1)
        }}>decrease</button>

        <div className="nightvision">
          <button onClick={() => moon(!sun)}>dark/light mode</button>
        </div>


      </div>
     
     <Card/>

    </div>
  )
}

export default App
