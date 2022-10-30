import React from 'react'
import '../../styles/cards.css'
import '../../styles/globalStyle.css'
import CardMAinImg from '../../images/product-8.jpg'
const CardCmp = (props) => {
  // console.log(props)
  return (
    <>
    <div className="CardItemBox b-r c-p"><div>
    
        <img src={props.img} alt="" className=''/>
    </div>
    
        <div className="CardItemDownArea d-f a-i-c j-c-sa">
        <p className="CardItemName bold">{props.title}</p>
        <p className="CardItemprice bold t-f3">RS:{props.price}</p>
        </div>
        <div className="ItemCategoryTag d-f j-c-c a-i-c bold t-f1">Category:{props.Category}
        <button className='btn2 pd-bt mg-l2 bold b-r c-p'>Add To Cart</button>
        </div>
    </div>
    </>
  )
}

export default CardCmp