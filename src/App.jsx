import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Structur from './page/Structur'
import Article from './component/organism/Article'
import About from './component/organism/About'
import Footer from './component/molecul/Footer'
import Header from './component/molecul/Header'
import Highlight from './component/organism/Highlight'
import Event from './component/organism/Event'
import LandingPage from './component/organism/landingPage'
import Kpsdm from './page/depart/Kpsdm'
import Rppm from './page/depart/Rppm'
import Relekat from './page/depart/Relekat'
import Kominfo from './page/depart/Kominfo'
import Inkref from './page/depart/Inkref'
import Upload from './page/Upload'
// import Login from './page/Login'
import Login from './page/Auth/Login'
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
import Eval from './page/evaluation/Eval'
// import Galery from './component/organism/Galery'

function App() {
  useEffect(() => {
    checkTokenValidity();
    window.scrollTo(0, 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 
  const isLoggedIn = localStorage.getItem("token") !== null;
  const checkTokenValidity = () => {
      const storedToken = localStorage.getItem('expiredTime');
      if (isLoggedIn) {
          if (storedToken > Date.now()) {
              localStorage.removeItem('token');
              localStorage.removeItem('expiredTime');
          }
      }
  };
  return (
    <div> 
      <Header/>
      <div className='pt-20'>
        <Routes>
          <Route exact path='/' element={
            <div className=''>
              <Helmet>
                <title>Information System Association</title>
              </Helmet>
              <LandingPage/>
              <Event/>
              <Highlight/>
              <About/>
              <Article/>
              {/* <Galery/> */}
              {/* <Question/> */}
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
          <Route path='/About' element={<Structur/>}/>
          <Route path='/Form' element={<Eval/>}/>
          {isLoggedIn?(
            <>
              <Route path='/*' element={<Navigate to='/'/>}/>
              <Route path='*' element={<Navigate to='/'/>}/>
              <Route path='/UpEvent' element={<UpEvent/>}/>
              <Route path='/Proker' element={<Proker/>}/>
              <Route path='/Upload' element={<Upload/>}/>
              <Route path='/Arsip' element={<Arsip/>}/>
            </>
            ):(<>
              <Route path='/*' element={<Navigate to='/Login'/>}/>
              <Route path='*' element={<Navigate to='/Login'/>}/>
            </>
          )}
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
