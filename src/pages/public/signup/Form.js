import React,{useState}from 'react';
import { Link } from 'react-router-dom';
import "@pages/public/signup/signup.css"

const Form=()=>
{
    const[userRegistration,setUserRegistration]=useState(
        { 
            email:"",
            password:"",
        }
    );
 const handleInput=(e)=>
        {
            const name=e.target.name;
            const value=e.target.value;
            console.log(userRegistration);
            setUserRegistration({...userRegistration,[name]:value});
        }
        const userByEmail=localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")):{};
        const handleSubmit=(e)=>
        {
            e.preventDefault();
            userByEmail[userRegistration.email]=userRegistration;
            localStorage.setItem("list",JSON.stringify(userByEmail));
            console.log(userByEmail);
        }

        return(
            <>
            <form onSubmit={handleSubmit}>
                <div >
                    <label htmlFor='Email'>Email</label>
                    <input  required type="email" autoComplete="off" placeholder='email' name='email'
                     value={userRegistration.email}
                     onChange={handleInput}
                      id="Email"/>
                </div>
                <div>
                    <label htmlFor='password'>password</label>
                    <input required type='password' autoComplete="off" placeholder='password' name='password'
                     value={userRegistration.password}
                     onChange={handleInput}  id="password"/>
                    <button type="submit" >Signup</button>
                </div>
            </form>
            
           <Link to="/auth/login"> Login </Link>
            </>
        )

}
export default Form;