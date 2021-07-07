import { useState, useEffect } from "react";
import axios from "axios";
export default function Axios() {
  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      setUsers(result.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>Users</h1>

      {isLoading && <div> Loading...</div>}
      {users.map((user, index) => (
        <div key={index}>{user.name} </div>
      ))}
    </div>
  );
}
