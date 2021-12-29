import React,{useState} from "react";


function Login() {

    const [loginData,setLoginData]=useState(
        {
            email:"",
            password:"",
        }
    )

function change(e)
{
    const {name,value}=e.target 
    setLoginData({...loginData,[name]:value})
    
}
    function loginHandler(e)
    {
        e.preventDefault();
        const userEmail=JSON.parse(localStorage.getItem("list"))
        if(userEmail[loginData.email]){
        alert('user logged in');
        }
        else{
            alert("data  not found");
        }
        // console.log(loginData.email);
        // console.log(loginData.password);
    }
    return (
        <div>
            <form onSubmit={loginHandler}>
                <input value={loginData.email} onChange={change} type="email"  placeholder='email' name='email'/>
                <input value={loginData.password} onChange={change} type="password"  placeholder="password" name="password" />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Login;
