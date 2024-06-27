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
import { useEffect } from 'react'
import Arsip from './page/Arsip'
import { Helmet } from 'react-helmet'
// import Galery from './component/organism/Galery'

function App() {
  useEffect(() => {
    checkTokenValidity();
    window.scrollTo(0, 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 
  const isLoggedIn = localStorage.getItem("token") !== null;
  console.log(localStorage.getItem("token"));
  const checkTokenValidity = () => {
      const storedToken = localStorage.getItem('expiredTime');
      if (isLoggedIn) {
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
      <div className='pt-20'>
        <Routes>
          <Route exact path='/' element={
            <div className='bg-main'>
              <Helmet>
                <title>Information System Association</title>
              </Helmet>
              <LandingPage/>
              <About/>
              <Event/>
              <Highlight/>
              {/* <Galery/> */}
              <Kabinet/>
              <VisiMisi/>
              <BadanInti/>
              <Depart/>
              <Article/>
              <Question/>
            </div>
          }/>
          <Route path='/BPI' element={<Bpi/>}/>
          <Route path='/KPSDM' element={<Kpsdm/>}/>
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
              <Route path='/Arsip' element={<Arsip/>}/>
            </>
            ):(<>
              <Route path='/UpEvent'  element={<Login/>}/>
              <Route path='/Proker' element={<Login/>}/>
              <Route path='/Arsip' element={<Login/>}/>
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
