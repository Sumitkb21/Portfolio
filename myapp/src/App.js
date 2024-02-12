import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact.js';
import Portfolio from './components/portfolio';
import Education from './components/education';


function App() {
  return (
   <Routes>
    
    <Route path="/" element= {<Home/>}/>;
    <Route path="/portfolio" element= {<Portfolio/>}/>;
    <Route path="/education" element= {<Education/>}/>;
    <Route path="/contact" element= {<Contact/>}/>;
    
   </Routes> 
   
  );

}

export default App;
