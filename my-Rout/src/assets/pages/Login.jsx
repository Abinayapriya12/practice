import react, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Components/Navbar"

function Login() {
const [details,setDetails]=useState({
  email:"",
  password:""
})
const handleChange=(e)=>{
const {name,value}=e.target

setDetails({...details,[name]:value})}
const handleLogin=(e)=>{e.preventDefault()

    console.log("Email:", details.email);
    console.log("Password:", details.password);
 }
  return (
    <div>
      <Navbar/>
      <h1>Login</h1>
       <form onSubmit={handleLogin}>
        <div id="card">
          
        <label>Email</label><input type="email"
        placeholder="you@example.com"
        name="email"
        value={details.email}
        onChange={handleChange}
        />
        <label>Password</label><input type="password"
        name="password"
        value={details.password}
        onChange={handleChange}
        />
        <button type="submit">Login</button>
        <p> new User?<a href="Register">Register</a></p>
        
        </div>
          </form>
             </div>
  )          
}
export default Login;
