import React from 'react'
import '../../styles/globalStyle.css'
import '../../styles/nav.css'
import { BsCartPlusFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
// import LoginCmp from '../registration'
import { useEffect } from 'react'
// import Modal from 'react-modal';
import { useState } from 'react'
import allAction from '../../store/actions/CombineAction'
import {db} from '../../config/firbase'
import { getDoc,collection } from 'firebase/firestore'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
const Userdata = collection(db, "Users")
const NavbarCmp = () => {
    const NaviGate = useNavigate()
    // const active = localStorage.getItem('User-Info')
    const [Instruction, SetInstruction] = useState(false)

    const dispatch = useDispatch()
    const ActiveUser = localStorage.getItem('User-Info')
    const { data } = useSelector(state => state.GetUserData)
    useEffect(() => {
        if (ActiveUser) {
            SetInstruction(true)
        }
    }, [])
    const NaviGating = (e) => {
        switch (e) {
            case 'Home':
                return (
                    NaviGate('/home')
                )
            case 'Upload':
                return (
                    NaviGate('/imageuploading')
                )
            case 'Products':
                return (
                    NaviGate('/products')
                )
            case 'LogIn':
                return (
                    NaviGate('/')
                )
            case 'SignUp':
                return (
                    NaviGate('/signup')
                )

            default:
                NaviGate('/')
        }
    }

    const LogOut = ()=>{
        localStorage.removeItem('User-Info')
        SetInstruction(false)
        NaviGate('/')
    }

    return (
        <>
            <div className="navbar-Section d-f j-c-sa a-i-c">
                <div className="Nav-logo">
                    <h1 className='text-col t-f3 c-p' onClick={() => NaviGating("Home")}>OnlineBAZZAR</h1>
                </div>
                <div className="Nav-links-actions">
                    <ul className='d-f j-c-c a-i-c'>
                        <li className='text-col2 bold d-f j-c-c a-i-c c-p a-l-l' onClick={(e) => NaviGating(e.target.innerHTML)}>Home</li>
                        <li className='mg-l text-col2 bold d-f j-c-c a-i-c c-p a-l-l' onClick={(e) => NaviGating(e.target.innerHTML)}>Upload</li>
                        <li className='mg-l text-col2 bold d-f j-c-c a-i-c c-p a-l-l' onClick={(e) => NaviGating(e.target.innerHTML)}>Products</li>
                    </ul>
                </div>
                <div className="Nav-icons d-f j-c-c a-i-c">
                    {
                        Instruction === false ?
                            <>
                                <button className='btn pd-bt bold b-r c-p' onClick={(e) => NaviGating(e.target.innerHTML)}>LogIn</button>
                                <button className='btn2 pd-bt mg-l2 bold b-r c-p' onClick={(e) => NaviGating(e.target.innerHTML)}>SignUp</button>
                            </>
                            :
                            <>
                                <div className='cc Chip-Col mg-r' onClick={() => NaviGate('/cart')}><BsCartPlusFill size={30} /></div>
                                                                <button className='btn pd-bt bold b-r c-p' onClick={LogOut}>LogOut</button>

                            </>
                    }
                </div>
            </div>

        </>
    )
}

export default NavbarCmp