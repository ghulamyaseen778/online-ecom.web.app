import ActionTypes from '../constant'
import { collection, getDocs } from 'firebase/firestore'
import {db} from '../../config/firbase'




const UserData = () =>{
    const Userdata = collection(db, "Users")
    const ActiveUser = localStorage.getItem('User-Info')
    return async (dispatch) => {
      try{
        dispatch({
          type:ActionTypes.USER_LODING
        })
          let arr = []
          const querySnapshot = await getDocs(Userdata);
          querySnapshot.forEach((doc) => {
            if (doc.id === ActiveUser) {
              arr.push(doc.data())
              // console.log(doc.data())
            }
          })
          dispatch({
              type:ActionTypes.USER_DATA,
              payload:arr[0]
          })
      }catch{
        console.log("hello")
      }
    }
}

const ProductsData= () =>{
  const ProductData = collection(db, "Products")
  let ProductArr = []
  return async (dispatch)=>{
    dispatch({
      type:ActionTypes.USER_LODING
    })
    const querySnapshot = await getDocs(ProductData);
    querySnapshot.forEach((doc) => {
      ProductArr.push(doc.data())
      // console.log(doc.data())
    })
    dispatch({
      type:ActionTypes.GET_PRODUCTS,
      payload:ProductArr
    })
  }
}

export {UserData,ProductsData};