import React from 'react'
import Img from '../../images/product-8.jpg'
import '../../styles/singleProduct/Style.css'
import '../../styles/globalStyle.css'
import { useDispatch,useSelector } from 'react-redux'
import { SingalData } from '../../store/actions/ProductAction'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SingleProductCmp = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const {SingalProduct} =useSelector((state)=>state.GetUserData)
  console.log(SingalProduct,"ff")
  useEffect(()=>{
    dispatch(SingalData(id))
    // console.log('hello')
  },[])
  return (
    <div className="SinglePrductPageSection d-f a-i-c j-c-c">
        <div className="singleProductPageSection-1">
            <img src={SingalProduct.ProductUrl} alt="" />
        </div>
        <div className="SingleProductPAgeSection-2 d-f j-c-sa f-d-c">
            <div className="singleTitle m-t1 bold"><h1>{SingalProduct.ProductTitle}</h1></div>
            <h3>By Admin</h3>
            <div className="SingleDescription m-t1">{SingalProduct.productDescription}.</div> 
            <p className="price m-t1 bold">Rs:{SingalProduct.ProductPrice}</p>
        </div>
    </div>
  )
}

export default SingleProductCmp