import {useEffect,useState} from  "react";

export default function Users() {
    

const [users, setUsers] = useState([])

const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/users").then((res)=> res.json()).then((data)=>{
    setUsers(data);
    setIsLoading(false)

});
    },[])
    
    
    return (
        <div>
            <h1>Users</h1>


            {isLoading && <div> Loading...</div> }
            {users.map((user,index)=> <div key={index}>{user.name} </div> )}
        </div>
    )
}
