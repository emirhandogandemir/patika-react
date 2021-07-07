import logo from './logo.svg';
import './App.css';
import {useState,useMemo,useCallback} from "react";
import Header from './components/Header';
function App() {

const [number, setNumber] = useState(0)


// const data =useMemo(()=>{
// return  calculateObject();
// },[number])

//const data = calculateObject();


const increment =useCallback(()=>{
  setNumber((prevState)=>prevState+1);
},[])

  return (
    <div className="App">
      <hr></hr>
       <Header  increment={increment}></Header>
 <h1>{number}</h1>


    </div>
  );
}

// function calculateObject(){
//   console.log("Calculating...");
//   for(let i =0; i<100000;i++){}
//   console.log("Calculating completed ...");
//   return {name:"mehmet"}
// }

export default App;
