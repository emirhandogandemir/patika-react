import logo from './logo.svg';
import './App.css';
import { Formik} from 'formik';

function App() {
  return (
    <div className="App">
     <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: 'mehmer',
        lastName: 'hasan',
        email: 'emirhan@gmail.com',
        gender:'female',
        hobies:[],
        country:"Turkey"
      }}
      onSubmit={async (values) => {
        console.log(values)
      }}
    >
     {
       ({handleSubmit,handleChange,values})=> 
       
       <form onSubmit={handleSubmit}>
       
       <label htmlFor="firstName">First Name</label>
       <input name="firstName" values={values.firstName} onChange={handleChange}></input>

     <br></br>

       <label htmlFor="lastName">Last Name</label>
       <input name="lastName" values={values.lastName} onChange={handleChange}></input>

       <br></br>

       <label htmlFor="email">Email</label>
       <input name="email" values={values.email} onChange={handleChange}></input>

     <br></br>
      <span>Female</span>
      <input type="radio" name="gender" value="female" checked={values.gender==="female"} onChange={handleChange}></input>
      <span>Male</span>
      <input type="radio" name="gender" value="male"  checked={values.gender==="male"} onChange={handleChange}></input>

<br></br>
<br></br>
<div>Football
<input type="checkbox" name="hobies" value="Football" onChange={handleChange}></input> </div>

<input type="checkbox"  name="hobies" value="Cinema" onChange={handleChange}></input>
<input type="checkbox"  name="hobies" value="Photograpfy" onChange={handleChange}></input>

<br>
</br>
<br></br>

<select name="country" value={values.country} onChange={handleChange}>
  <option value="turkey">Turkey</option>
  <option  value="america">America</option>
  <option  value="england">England</option>
</select>
<br></br>
<br>
</br>
<br></br>
       <button type="submit">Submit</button>
       {JSON.stringify(values)}
     </form>
     }
    </Formik>
    </div>
  );
}

export default App;
