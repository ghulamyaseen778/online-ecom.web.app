import React from 'react'
import '../../styles/registration/login.css'
import '../../styles/globalStyle.css'
import { useNavigate } from 'react-router-dom'
import allAction from '../../store/actions/CombineAction'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth} from '../../config/firbase'
import { collection, getDocs } from 'firebase/firestore'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'


const LoginCmp = () => {
    const navigate =useNavigate()
    const [Email, SetEmail] = useState("")
  const [Password, SetPassword] = useState("")
  const ActiveUser=localStorage.getItem('User-Info')
  const dispatch=useDispatch()
  // const bool = false

  useEffect(()=>{
    if (ActiveUser){
      dispatch(allAction.UserData())
      navigate('/home')
    }
  },[])

  const UserPatchUpLogin = () =>{
    Email!=""&&Password!=""?
    signInWithEmailAndPassword(auth,Email,Password)
    .then((Response)=>{
      const user=Response.user;
      localStorage.setItem('User-Info',user.uid)
      navigate('/home')
      SetEmail('')
      SetPassword('')
    })
    .catch((error)=>{
      console.log(error)
      SetEmail('')
      SetPassword('')
    }):
    console.log("please filled all field")
    SetEmail('')
      SetPassword('')
  }
  return (
    <>
      <div className="loginMainsectionBox d-f a-i-c j-c-c f-d-c">
      <div className="LoginBoxSection d-f a-i-c j-c-c f-d-c">
            <div className="LoginBoxHeading">
                <h1>Login</h1>
            </div>
            <input type="text" placeholder='Enter Your Email...' className='in-fi-all pd-bt m-t1 f-s b-r' onChange={(e) => SetEmail(e.target.value)}/>
            <input type="password" placeholder='Enter Your Password'className='in-fi-all pd-bt m-t1 f-s b-r'onChange={(e) => SetPassword(e.target.value)}/>
        </div>
        <button className='btn4 pd-bt mg-l2 bold b-r c-p m-t1' onClick={UserPatchUpLogin}>countinue</button>
        <div className="LoginLinkSection">
            You Can't Have Account <span className='text-col1 bold c-p' onClick={()=>navigate('/signup')}>SignUp</span>
        </div>
      </div>
    </>
  )
}

export default LoginCmp