import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/footer.css'
import '../../styles/globalStyle.css'

const FooterCmp = () => {
  const NaviGate = useNavigate()
  const NaviGatingFooter = (e)=>{
    switch (e) {
      case 'Home':
          return(
              NaviGate('/')
          )
      case 'Upload':
          return(
              NaviGate('/imageuploading')
          )
      case 'Products':
          return(
              NaviGate('/products')
          )
      case 'Cart':
          return(
              NaviGate('/cart')
          )
      case 'Login':
          return(
              NaviGate('/login')
          )
      case 'SignUp':
          return(
              NaviGate('/signup')
          )
  
      default:
          NaviGate('/')
  }

  }

  return (
    <>
      <div className='footerMAinSection '>
      <div className="d-f j-c-c a-i-c">
      <div className="footerSectionPages d-f j-c-c a-i-c f-d-c">
        <h2 className='FooterHeadingSection'>Pages</h2>
      <ul className='footerCombine m-t1'>
        <li className='c-p a-l-l' onClick={(e)=>NaviGatingFooter(e.target.innerHTML)}>Home</li>
        <li className='c-p a-l-l' onClick={(e)=>NaviGatingFooter(e.target.innerHTML)}>Upload</li>
        <li className='c-p a-l-l' onClick={(e)=>NaviGatingFooter(e.target.innerHTML)}>Products</li>
        <li className='c-p a-l-l' onClick={(e)=>NaviGatingFooter(e.target.innerHTML)}>Cart</li>
      </ul>
      </div>
      <div className="footerSectionLinks d-f j-c-c a-i-c f-d-c">
        <h2 className='FooterHeadingSection'>Registration</h2>
        <ul className='footerCombine m-t1'>
        <li className='c-p a-l-l' onClick={(e)=>NaviGatingFooter(e.target.innerHTML)}>Login</li>
        <li className='c-p a-l-l' onClick={(e)=>NaviGatingFooter(e.target.innerHTML)}>SignUp</li>
      </ul>
      </div>
      <div className="footerSectionContacts d-f j-c-c a-i-c f-d-c">
        <h2 className='FooterHeadingSection'>Contacts</h2>
        <ul className='footerCombine m-t1'>
        <li className='c-p a-l-l'>+923360839778</li>
        <li className='c-p a-l-l'>xyz@xyz.com</li>
      </ul>
      </div>
      </div>
      <div className="FooterCopyRight d-f j-c-c a-i-c">CopyRight 	&#169; By OnlineBazzar</div>
      </div>
    </>
  )
}

export default FooterCmp