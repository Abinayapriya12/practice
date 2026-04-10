import react, { useState } from "react"
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom"
function Register() {
 const [details,setDetails]=useState({
  name:"",
  email:"",
  password:""})

const handleChange=(e)=>{
const {name,value}=e.target
setDetails({...details,[name]:value})
}
const navigate=useNavigate
 const handleLogin=(e)=>{e.preventDefault()
    console.log("Name:",details.name);
    console.log("Email:", details.email);
    console.log("Password:", details.password);

     navigate(`/dynamic/${details.name}`)
 } 
  return(
    <div>
       <Navbar/>
       <form onSubmit={handleLogin}>
         <h1>Register</h1>
         <div id="card">
        <label>Name</label><input 
        type="text"
        placeholder="enter your name"
        name="name"
        value={details.name}
        onChange={handleChange}
        />

        <label>Email</label><input 
        type="email"
        placeholder="you@example.com"
        name="email"
        value={details.email}
        onChange={handleChange}
        />

        <label>Password</label><input 
        type="password"
        name="password"
        value={details.password}
        onChange={handleChange}/>
        <button type="submit" >register</button>
        <p>Back to Login <a href="Login">Login</a></p>
        </div>
          </form>  
    </div>
  );
}
export default Register;