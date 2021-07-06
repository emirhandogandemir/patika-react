import React,{useState,useEffect} from 'react'
import List from './List'
import Form from './Form'
import {} from "./style.css"
export default function Contacts() {

    const[contacts, setContacts] =useState([{
        fullname:"Mehmet",
        phone_number:"12345"

    },
{
    fullname:"Ayse",
    phone_number:"45678" 
},
{
    fullname:"Nazlı",
    phone_number:"987659" 
}])

    useEffect(()=>{
console.log(contacts)
    },[contacts])

    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts}/>
            <Form addContact={setContacts} contacts={contacts}/>
        </div>
    )
}
