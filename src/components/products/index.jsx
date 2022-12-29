import React, { useEffect } from 'react'
import { useState } from 'react'
import '../../styles/globalStyle.css'
import '../../styles/products/product.css'
import CardCmp from '../cards'
import { useDispatch, useSelector } from 'react-redux'
import { ProductsData } from '../../store/actions/ProductAction'
// import { UserData } from '../../store/actions/ProductAction'
const ProductsCmponent = () => {
    useEffect(() => {
        dispatch(ProductsData())
        // dispatch(UserData())
    }, [])
    const dispatch = useDispatch()
    const { dataLoading,products } = useSelector(state => state.GetUserData)
    //  console.log(product)
    return (
        // <></>

        <>
            <hr />
            {dataLoading ? <>
                <h1>loding...</h1>
            </> : <>
                <div className="ProductsMainSection d-f j-c-c">
                    <div className="ShowCaseSection d-f a-i-c j-c-sa f-w-w m-t2">
                        {products.map((e,i) => {
                            // console.log(e) 
                            return(
                                
                                <CardCmp title={e.data().ProductTitle} price={e.data().ProductPrice} Category={e.data().Options}  img={e.data().ProductUrl} key={i} id={e.id}/>
                                )

                        })
                        }



                    </div>
                </div>
            </>}
        </>
    )
}

export default ProductsCmponent