import React from 'react'
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { CiUser, CiLock } from "react-icons/ci";

function SignIn-SignUpButton() {
    const[Form,setForm] =useState('login');


  return (
    <>
    {Form === 'login' ? (<SignIn CiUser={CiUser} CiLock={CiLock} FormHandle={setForm} />) : (<SignUp CiUser={CiUser} CiLock={CiLock}  FormHandle={setForm} />)}
    </>
    
    
  )
}

export default SignIn-SignUpButton