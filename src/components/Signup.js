
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import{Link, useNavigate} from 'react-router-dom'



function Signup(){
    const history = useNavigate();
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:3000/Signup", {
                email, password

            })
            .then(res =>{
                if(res.data=="exist"){
                    alert("User already exist");

                }
                
                else if(res.data=="notexist"){
                    
                    history("/",{state:{id:email}})
                    
                }
            })
            .catch(e=>{
                alert("Wrong details");
                console.log(e);
            })

        } catch(e){
            console.log(e);

        }
    }
  return (
    <div className='login'>
        <h1>Signup Page</h1>
        <form action='POST'className='loginbox'>
            <h3>Email</h3>
            <input type='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' name="" id=""/>
            <h3>Password</h3>
            <input type='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' name="" id=""/>
            
      
        </form>
        <button onClick={submit}>Submit</button>
        <br/>
        <p>OR</p>
        <br/>
        <Link to='/'>Login page</Link>
      
    </div>
  )
}

export default Signup;
