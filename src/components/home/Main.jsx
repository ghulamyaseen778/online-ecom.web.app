import React from 'react'
import '../../styles/home/homeCmp.css'
import '../../styles/globalStyle.css'
import MainCmpImg1 from '../../images/MAinCmpImg-1.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { UserData } from '../../store/actions/ProductAction'
import { useNavigate } from 'react-router-dom'


const MainCmp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {data,dataLoading}=useSelector(state=>state.GetUserData)

  useEffect(()=>{
    dispatch(UserData())
  },[])
  return (
    <>
    {
      dataLoading?
      <>
      <h1>Loding</h1>
      </>:<>
      <div className="MAinSection d-f j-c-sa a-i-c">
        <div className="section-1">
            <h1 className='text-col2'>Welcome {data.UserName}</h1>
            <h2 className='text-col'>by OnlineBazzar</h2>
            <div className="d-f a-i-c m-t1">
                <button className='btn3 pd-bt bold b-r c-p'onClick={()=>navigate("/products")}>Our Products</button>
            </div>
        </div>
        <div className="section-2"><img src={MainCmpImg1} alt="" className='MainImgHomePAgeImg' /></div>
    </div>
      </>
    }
    </>
  )
}

export default MainCmp