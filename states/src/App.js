import logo from './logo.svg';
import {useState} from "react"
import './App.css';

function App() {

const [name,setName] = useState('Mehmet');
const [age,setAge] = useState(20)
const [friends, setFriends] = useState(["Ahmet","Mahmut"]);
const [adress,setAdress] = useState({title:"İstanbul",zip:34070})

  return (
    <div className="App">
   <h1>Merhaba {name} </h1>
   <h2>{age}</h2>
   <button onClick={()=>setName("Ahmet")}>Change Name</button>
   <button onClick={()=> setAge(35)} > Change Age</button>
   <hr/>
   <h2>Friends</h2>
   {friends.map((friend,index)=><div key={index}>{friend}</div>)}
   
   <br></br>

   <button onClick={()=> setFriends([...friends,"Ayşe"])} > Add Friends</button>
  

<hr/>
   <br></br>

<h2>Adress</h2>
<div>{adress.title}{adress.zip}</div>
<br></br>
<button onClick={()=> setAdress({...adress,zip:3839})} > Change Adress</button>
   </div>
  );
}

export default App;
