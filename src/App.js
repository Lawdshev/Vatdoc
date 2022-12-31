import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Index from './Pages/Index';
import About from './Pages/about'
import Navbar from './Components/Navbar/Navbar';
import FooterOne from './Components/FooterOne';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/about' element={<About/>}/> 
        </Routes>
        <FooterOne/>
      </Router>
    </>
  );
}
export default App;
