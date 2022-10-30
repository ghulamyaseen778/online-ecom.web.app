import './App.css';
import NavBarCmp from './components/Navbar'
import HomeCmp from './components/home';
import FooterCmp from './components/footer';
import { Routes,Route } from 'react-router-dom'
import ImageUploader from './components/imageUploader';
import ProductCart from './components/cart';
import LoginCmp from './components/registration';
import SignUpCmp from './components/registration/signup';
import ProductsCmponent from './components/products';
import SingleProductCmp from './components/singleProduct';

// import { useEffect } from 'react'




function App() {
  
  return (
    <>
      <NavBarCmp />
    <Routes >
      <Route path="/home" element={<HomeCmp/>} />
      <Route path='/imageuploading' element={<ImageUploader/>}/>
      <Route path='/cart' element={<ProductCart/>}/>
      <Route index element={<LoginCmp/>}/>
      <Route path='/signup' element={<SignUpCmp/>}/>
      <Route path='/products' element={<ProductsCmponent/>}/>
      <Route path='/single/:id' element={<SingleProductCmp/>}/>
      <Route path='*' element={<h1>NotFound</h1>}/>
    </Routes>
    <FooterCmp/>
      
    </>
  );
}

export default App;
