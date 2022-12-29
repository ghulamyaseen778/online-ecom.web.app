import React from 'react'
import '../../styles/cards.css'
import '../../styles/globalStyle.css'
import CardMAinImg from '../../images/product-8.jpg'
import { useNavigate } from 'react-router-dom'
const CardCmp = (props) => {
  const navigate = useNavigate()
  // console.log(props)
  return (
    <>
    <div onClick={()=>navigate(`/single/${props.id}`)}>
    <div className="CardItemBox b-r c-p"><div>
    
    <img src={props.img} alt="" className=''/>
</div>

    <div className="CardItemDownArea d-f a-i-c j-c-sa">
    <p className="CardItemName bold">{props.title}</p>
    <p className="CardItemprice bold t-f3">RS:{props.price}</p>
    </div>
    <div className="ItemCategoryTag d-f j-c-c a-i-c bold t-f1">Category:{props.Category}
    </div>
  <div className='bold d-f j-c-c a-i-c'>ProductNo:{props.proNo}</div>
</div>
    </div>
    </>
  )
}

export default CardCmp