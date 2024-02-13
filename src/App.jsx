import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './component/organism/About'
import Article from './component/organism/Article'
import BadanInti from './component/organism/BPI'
import Depart from './component/organism/Depart'
import Footer from './component/molecul/Footer'
import Header from './component/molecul/Header'
import Highlight from './component/organism/Highlight'
import Event from './component/organism/Event'
import Kabinet from './component/organism/Kabinet'
import Question from './component/organism/Question'
import VisiMisi from './component/organism/VisiMisi'
import LandingPage from './component/organism/landingPage'
import Kpsdm from './page/depart/Kpsdm'
import Rppm from './page/depart/Rppm'
import Relekat from './page/depart/Relekat'
import Kominfo from './page/depart/Kominfo'
import Inkref from './page/depart/Inkref'
import Upload from './page/Upload'
import Login from './page/Login'
import Proker from './page/Proker'
import Store from './page/Store'
import Detail from './page/Detail'
import All from './page/All'
import Bpi from './page/depart/Bpi'
import MoreEvent from './page/MoreEvent'
import UpEvent from './page/UpEvent'
import Axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  useEffect(() => {
    getProducts();
    checkTokenValidity();
    window.scrollTo(0, 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 
  const isLoggedIn = localStorage.getItem("token") !== null;
  const [getKonten,setKonten]= useState([]);
  const getProducts = async () => {
      const response = await Axios.get("https://qkrmjmws-8000.asse.devtunnels.ms/api/get");
      setKonten(response.data);
    };
  const checkTokenValidity = () => {
      const storedToken = localStorage.getItem('expiredTime');
      if (isLoggedIn) {
        console.log('now',Date.now())
        console.log('expired',localStorage.getItem('expiredTime'))
          if (storedToken < Date.now()) {
              localStorage.removeItem('token');
              localStorage.removeItem('expiredTime');
              localStorage.removeItem('ID');
          }
      }
  };
  return (
    <div> 
      <Header/>
      <div >
        <Routes>
          <Route exact path='/' element={
            <div className='bg-main'>
              <LandingPage/>
              <About/>
              <Event/>
              <Highlight/>
              <Kabinet/>
              <VisiMisi/>
              <BadanInti/>
              <Depart/>
              <Article/>
              <Question/>
            </div>
          }/>
          <Route path='/BPI' element={<Bpi/>}/>
          <Route path='/KPSDM' element={<Kpsdm API={getKonten}/>}/>
          <Route path='/RPPM' element={<Rppm/>}/>
          <Route path='/RELEKAT' element={<Relekat/>}/>
          <Route path='/KOMINFO' element={<Kominfo/>}/>
          <Route path='/INKREF' element={<Inkref/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Store' element={<Store/>}/>
          <Route path='/All' element={<All/>}/>
          <Route path='/MoreEvent' element={<MoreEvent/>}/>
          <Route path='/Artikel/:id' element={<Detail/>}/>
          {isLoggedIn?(
            <>
              <Route path='/UpEvent' element={<UpEvent/>}/>
              <Route path='/Proker' element={<Proker/>}/>
              <Route path='/Upload' element={<Upload/>}/>
            </>
            ):(<>
              <Route path='/UpEvent' element={<Login/>}/>
              <Route path='/Proker' element={<Login/>}/>
              <Route path='/Upload' element={<Login/>}/>
            </>
          )}
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
