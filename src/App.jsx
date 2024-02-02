import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './component/organism/About'
import Article from './component/organism/Article'
import BadanInti from './component/organism/BPI'
import Depart from './component/organism/Depart'
import Footer from './component/molecul/Footer'
import Header from './component/molecul/Header'
import Highlight from './component/organism/Highlight'
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

function App() {
  return (
    <div> 
      <Header/>
      <div className='bg-white'>
        <Routes>
          <Route path='/' element={
            <>
            <LandingPage/>
            <About/>
            <Highlight/>
            <Kabinet/>
            <VisiMisi/>
            <BadanInti/>
            <Depart/>
            <Article/>
            <Question/>
            </>
          }/>
          <Route path='/KPSDM' element={<Kpsdm/>}/>
          <Route path='/RPPM' element={<Rppm/>}/>
          <Route path='/RELEKAT' element={<Relekat/>}/>
          <Route path='/KOMINFO' element={<Kominfo/>}/>
          <Route path='/INKREF' element={<Inkref/>}/>
          <Route path='/Upload' element={<Upload/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
