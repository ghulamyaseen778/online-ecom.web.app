import './App.css';
import NavBarCmp from './components/Navbar'
import HomeCmp from './components/home';
import FooterCmp from './components/footer';
import { Routes,Route } from 'react-router-dom'
import ImageUploader from './components/imageUploader';
import LoginCmp from './components/registration';
import SignUpCmp from './components/registration/signup';
import ProductsCmponent from './components/products';
import SingleProductCmp from './components/singleProduct';
import ErrCmp from './components/err';
import AdminAuth from './ProctedRoute';

// import { useEffect } from 'react'




function App() {
  
  return (
    <>
      <NavBarCmp />
    <Routes >
      <Route path="/home" element={<HomeCmp/>} />
      <Route index element={<LoginCmp/>}/>
      <Route path='/signup' element={<SignUpCmp/>}/>
      <Route path='/products' element={<ProductsCmponent/>}/>
      <Route path='/single/:id' element={<SingleProductCmp/>}/>
      <Route path='/admin/:id'
      element={
        <AdminAuth>
          <ImageUploader />
        </AdminAuth>
      }
      />
      <Route path='*' element={<ErrCmp/>}/>
    </Routes>
    <FooterCmp/>
      
    </>
  );
}

export default App;
