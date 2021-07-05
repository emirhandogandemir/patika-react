
import './App.css';
import Header from './components/Header';
import User from './components/User';

const friends = [
  {
    id:1,
name:"Tayfun"
  },
  {
    id:2,
name:"Emirhan"
  },
  {
    id:3,
name:"Hasan"
  },
  {
    id:4,
name:"Gökhan"
  }
];

function App(){
  return (
    <div>
<User 
ad={"Ahmet"}
surName="Emirhan"
//isLoggedIn={true} 
friends={friends}
adress={{
  title:'Ataşehir',
  zip:234
}}/>





    </div>



  )

//return React.createElement('div',null,'hello')
}

export default App;