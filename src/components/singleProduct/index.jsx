import React from 'react'
import Img from '../../images/product-8.jpg'
import '../../styles/singleProduct/Style.css'
import '../../styles/globalStyle.css'

const SingleProductCmp = () => {
  return (
    <div className="SinglePrductPageSection d-f a-i-c j-c-c">
        <div className="singleProductPageSection-1">
            <img src={Img} alt="" />
        </div>
        <div className="SingleProductPAgeSection-2 d-f j-c-sa f-d-c">
            <div className="singleTitle m-t1 bold"><h1>SingleProductPAgeSection-2</h1></div>
            <h3>By Admin</h3>
            <div className="SingleDescription m-t1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cum iste similique eligendi est doloribus vitae, in voluptatibus et consequuntur.</div>
            <div className="singleCounter a-i-c d-f m-t1">
                <button>+</button>
                <p>0</p>
                <button>-</button>
            </div>
            <p className="price m-t1 bold">Rs:30000</p>
            <button className='m-t1'>Add To Cart</button>
        </div>
    </div>
  )
}

export default SingleProductCmp