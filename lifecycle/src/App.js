import logo from './logo.svg';
import Counter from './components/Counter';
import {useState} from "react"
import './App.css';

function App() {
 
const [isVisible, setisVisible] = useState(true)

  return (
    <div className="App">
   {isVisible &&  <Counter/>}
   
   <br></br>
    <button onClick={()=>setisVisible(!isVisible)}> Toggle</button>
    </div>
  );
}

export default App;
