import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import Netflixshow from './Pages/Netflixshow';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {


  return (
    

    <BrowserRouter>
     <div className='App' >
     <ScrollToTop/>
    <Routes>
      <Route path='/' Component={Homepage} exact/>
      <Route path='/Netflixshow' Component={Netflixshow}/>
      </Routes>
     <Footer/>    
    </div>
    </BrowserRouter>
   
  );
}


export default App;

