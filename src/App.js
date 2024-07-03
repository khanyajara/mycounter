import logo from './logo.svg';
import './App.css';
import { useState} from 'react'


function App() {

    // let count = 0;
   // count = 7;
   const [count , setCount] = useState(0);
   const increment = ()=>{
    setCount(count+1);
   }
   const decrement =()=>{
    if (count > 0 ){setCount(count-1);}
    else (setCount(count))
    
   }
    
  return (
    <div className="App">

     <h1>My Counter </h1>
     <h5>{count}</h5>
     <button onClick={increment} >Up</button>
     <button onClick={decrement}>Down</button>
    </div>
  );
}

export default App;
