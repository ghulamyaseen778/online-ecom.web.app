import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { ProductsData, UserData } from '../../store/actions/ProductAction'
import MainCmp from './Main'
import ProductCmp from './Product'

const HomeCmp = () => {
  const active = localStorage.getItem('User-Info')
const navigate = useNavigate()
useEffect(()=>{
  if (!active){
    navigate('/')
  }
},[])

  return (
    <>
  <MainCmp/>
  <ProductCmp/>
    </>
  )
}

export default HomeCmp