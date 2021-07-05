import React,{useState} from 'react'

export default function InputExample() {
    
    const [form, setForm] = useState({name:"",surname:""})
   


    const onChangeInput = (e)=>{
console.log(e.target)
setForm({...form,[e.target.name]:e.target.value})
    }


    return (
        <div>
           Name
            <input name="name" value={form.name} onChange={onChangeInput}></input>
            <br />
            <br></br>
         Surname
            <input name="surname" value={form.surname} onChange={onChangeInput}></input>
            {form.name} {form.surname}
        </div>
    )
}
