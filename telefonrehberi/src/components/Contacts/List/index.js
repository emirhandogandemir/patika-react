import React,{useState} from 'react'

export default function List({contacts}) {
   
   const [filterText, setFilterText] = useState("")


   // elimizdeki kaydı alıyoruz contactsi filtreliyoruz bir her defasında bu filtre bir item veriyor itemın keylerini ayırıyorum
   const filtered = contacts.filter((item)=>{
       return Object.keys(item).some((key)=>{

         return  item[key].toString().toLowerCase().includes(filterText.toLowerCase());
          }   )
   })
   

    return (
        <div>

<input placeholder="filter contact" value={filterText}  onChange={(e)=>setFilterText(e.target.value)}></input>

           <ul className="list">
        {
            filtered?.map((contact,index)=>
            <li key={index}> 
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
            
            
            </li>)
        }

           </ul>

           <p>
               Total Contacts({filterText.length})
           </p>
        </div>
    )
}
