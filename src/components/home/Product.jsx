import React from 'react'
import '../../styles/home/productCmp.css'
import CardCmp from '../cards'
import { useDispatch, useSelector } from 'react-redux'
import { ProductsData } from '../../store/actions/ProductAction'

const ProductCmp = () => {
  const dispatch = useDispatch()
  
  return (
    <>
    <div className="productsMAin d-f j-c-c a-i-c f-d-c">
    <h1 className='ProductHeadings'>Our Best Products</h1>
    <div className="ProductsGroupCard d-f j-c-sa a-i-c m-t2">
    <CardCmp title='Men Jacket' price='3000' Category='Clothing'  img='https://static-01.daraz.pk/p/9d6f7a1453e2becc9fc827fbaa288341.jpg'/>        
    <CardCmp title='Watch'price='10000' Category='Watchs'img='https://static-01.daraz.pk/p/17616c1443dc6c63178708cee54e7389.jpg'/>        
    <CardCmp title='Shoes for men' price='2000' Category='Shoes'  img='https://cdn.shopify.com/s/files/1/0046/9139/4658/files/SS20_HOMEPAGE_MCCLEANPAIR_880x550_crop_center.jpg?v=1614334815'/>        
    <CardCmp title='iphone 14' price='300000' Category='Mobiles'  img='https://www.apple.com/v/iphone-14-pro/a/images/overview/hero/hero_endframe__cvklg0xk3w6e_large.jpg'/>        
    </div>
    </div>
    </>
  )
}

export default ProductCmp