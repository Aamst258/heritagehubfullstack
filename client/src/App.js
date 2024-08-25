
import './Styles/App.css';
import Home from '../src/pages/Home.js';
// import Navbar from './Components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Places from './pages/places.js';
import Place from  './pages/place.js'
import Signup  from './pages/Signup.js';
import Login from './pages/Login.js';
import ProtectedRoutes from './Services/ProtectedRoutes.js';
import SignupGuide from './pages/SignupGuide.js'; 
import LoginGuide from './pages/LoginGuide.js';
import UserDashBoard from './pages/UserDashBoard.js';
import GuideDashboard from './pages/GuideDashboard.js';
import BookTour from './pages/BookTour.js';
import FooterContent from './pages/FooterContent.js';  



 

function App() {
  
  
  return (
    <Router> 

    <Routes>
    
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login  />} />  
    <Route path="/signup-guide" element={<SignupGuide />} />
    <Route path="/login-guide" element={<LoginGuide />} /> 
    <Route path="/footer" element={<FooterContent />} /> 
    
    <Route path='/'  element={<ProtectedRoutes />}> 
    <Route exact path="/" element={<Home />} />
    < Route exact path="/places" element={<Places />} />
    < Route exact path="/user-dashboard" element={<UserDashBoard />} />
    < Route exact path="/guide-dashboard" element={<GuideDashboard />} />
    < Route exact path="/book-tour" element={<BookTour />} />

     <Route exact path="/places/:id" element={<Place />} />
     
    </Route>
   


    </Routes> 

  </Router>
  );
}

export default App;
