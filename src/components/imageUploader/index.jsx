import React, { useEffect, useState } from 'react'
import '../../styles/globalStyle.css'
import '../../styles/imageuploader/uploader.css'
import { Storage ,db} from '../../config/firbase'
import {getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
const productData = collection(db,'Products')

const ImageUploader = () => {
  const [ImageUpload,SetImageUpload]=useState('')
  const [Options,SetOptions] = useState('Mobile')
  const [URl,SetUrl]=useState('')
  const [ProductPrice,SetProductPrice]=useState('')
  const [ProductTitle,SetProductTitle]=useState('')
  const [productDescription,SetProductDescription]=useState('')
  const ActiveUser=localStorage.getItem('User-Info')
  const navigate =useNavigate()

  useEffect(()=>{
      if(!ActiveUser){
        navigate('/')
      }
  },[])
  
  const UploadAndsubmitForm = async (e) =>{
    e.preventDefault()
    if(Options!=""&&ProductPrice!=""&&productDescription!=""&&ProductTitle!=""){
      
    const storageRef = ref(Storage,`images/${ImageUpload.name}`)
      // console.log(ImageUpload.name)
      await uploadBytes(storageRef,ImageUpload).then(async(snap)=>{
        console.log(snap)
        await getDownloadURL(storageRef)
       .then((url)=>{
         addDoc(productData,{
            Options,
            ProductPrice,
            ProductTitle,
            productDescription,
            ProductUrl:url,
            status:false,
          })
          
        })
      }) 
      // console.log(ProductObj)

      // console.log(URl)
        
        
      
          // console.log(ProductObj)
        
    }

  }
  return (
    <>
    <div className="uploaderMainSection d-f a-i-c j-c-c f-d-c">
      <div className="uploadingHeadingSection">
        <h1 className='m-t1'>Upload Your Product</h1>
      </div>
      <div className="UploadFormSection d-f a-i-c j-c-c">
        <form className='d-f j-c-sb a-i-c f-d-c'> 
          
        <input type="text" placeholder='Enter Your Product Name' className='in-fi-all pd-bt m-t1 f-s b-r' required onChange={(e)=>SetProductTitle(e.target.value)}/>
        <input type="file" name="file" id="file" required className='m-t1' onChange={(e)=>SetImageUpload(e.target.files[0])}/>
        <input type="text" placeholder='Enter Your Product Price' className='in-fi-all pd-bt m-t1 f-s b-r' required onChange={(e)=>SetProductPrice(e.target.value)}/>
        <select name="selected" id="select" className='m-t1' required onChange={(e)=>SetOptions(e.target.value)}>
          <option value="Mobile">Mobile</option>
          <option value="Shoes">Shoes</option>
          <option value="Clothing">Clothing</option>
          <option value="Jewllery">Jewllery</option>
          <option value="Watchs">Watchs</option>
        </select>
        <textarea name="Textarea" id="" cols="30" rows="10" placeholder='Enter Product Description' required className='textareForm m-t1' onChange={(e)=>SetProductDescription(e.target.value)}></textarea>
        <button className='m-t1 pd-bt bold btn2 c-p b-r' onClick={UploadAndsubmitForm}>Submit Product</button>
        </form>
        </div>
      </div>
    </>
  )
}

export default ImageUploader