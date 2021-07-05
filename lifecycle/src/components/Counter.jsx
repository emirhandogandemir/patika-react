import React from "react";
import {useState,useEffect} from "react"
export default function Counter() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Mehmet");

  useEffect(() => {
    console.log("number state güncellendi");
  }, [number]);

//   useEffect(() => {
//     console.log(" name state güncellendi");
//   }, [name]);

  useEffect(() => {
      
    console.log("component mount edildi");
   const interval =  setInterval(()=>{
          setNumber((n)=>n+1)
      },1000)


  return ()=>clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Sayı</button>
      <br></br>
      {/* <h1>{name}</h1>
      <button onClick={() => setName("Mete")}>isim</button> */}
    </div>
  );
}
