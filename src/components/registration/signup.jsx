import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/globalStyle.css'
import '../../styles/registration/signup.css'
import { useDispatch } from 'react-redux'
import allAction from '../../store/actions/CombineAction'
import { auth, db } from '../../config/firbase';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, doc, setDoc, getDocs } from 'firebase/firestore'
import { useEffect } from 'react'
// import { async } from '@firebase/util'
// import { useNavigate } from 'react-router-dom'
// const navigate = useNavigate()
const Userdata = collection(db, "Users")

const SignUpCmp = () => {
  const navigate = useNavigate()
  const [UserName, SetUserName] = useState("")
  const [Email, SetEmail] = useState("")
  const [Password, SetPassword] = useState("")
  const dispatch = useDispatch()
  const ActiveUser = localStorage.getItem('User-Info')

  useEffect(
    () => {
      if (ActiveUser) {
        navigate('/home')
        }
    }, []
  )

  const UserSignUp = {
    UserName,
    Email,
    Password,
    Role:"User"
  }

  const UserPatchUpSignUp = () => {
    // console.log(UserSignUp)
    // dispatch(allAction.UserSignUp(UserSignUp))
    UserName.trim() != "" && Email.trim() != "" && Password.trim() != "" ?
      UserName.trim().length <= 13 && UserName.trim().length > 3 ?
        createUserWithEmailAndPassword(auth, Email, Password)
          .then((Response) => {
            const user = Response.user
            localStorage.setItem('User-Info', user.uid)
            async function SingUp() {
              const Ref = doc(db, 'Users', `${user.uid}`)
              await setDoc(Ref, UserSignUp)

              dispatch(allAction.UserData(UserSignUp))
            }
            SingUp()
            navigate('/home')
          })
          .catch((erorr) => {
            console.log(console.log(erorr))
          })
        :
        console.log('please enter Min3 digits in username and max 13 digits') :
      console.log('please filled all fields')

    SetUserName("")
    SetEmail("")
    SetPassword("")
  }

  return (
    <div className="SignUpMainsectionBox d-f a-i-c j-c-c f-d-c">
      <div className="SignUpBoxSection d-f a-i-c j-c-c f-d-c">
        <div className="SignUpBoxHeading">
          <h1>SignUp</h1>
        </div>
        <input type="text" placeholder='Enter Your UserName...' className='in-fi-all pd-bt m-t1 f-s b-r' value={UserName} maxLength={13} onChange={(e) => SetUserName(e.target.value)} />
        <input type="text" placeholder='Enter Your Email...' className='in-fi-all pd-bt m-t1 f-s b-r' value={Email} onChange={(e) => SetEmail(e.target.value)} />
        <input type="password" placeholder='Enter Your Password' className='in-fi-all pd-bt m-t1 f-s b-r' value={Password} onChange={(e) => SetPassword(e.target.value)} />
      </div>
      <button className='btn4 pd-bt mg-l2 bold b-r c-p m-t1' onClick={UserPatchUpSignUp}>countinue</button>
      <div className="SignUpLinkSection">
        You a Have Account <span className='text-col1 bold c-p' onClick={() => navigate('/')}>LogIn</span>
      </div>
    </div>
  )
}

export default SignUpCmp