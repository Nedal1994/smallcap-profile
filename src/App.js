import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Roadmap from './pages/Roadmap';
import Tokenomics from './pages/Tokenomics';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Dapp from './pages/Dapp';

import LandingPage from './components/LandingPage';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Subscription from './components/Subscription';
import Analysis from './components/Analysis';
import SearchResults from './components/SearchResults'; // Import the new component
import EditProfile from './components/EditProfile'
import UpdatePassword from './components/UpdatePassword'
import DeleteProfile from './components/DeleteProfile'

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/search" component={SearchResults} /> {/* Add this route */}
            <Route path="/about" element={<About />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/tokenomics" element={<Tokenomics />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dapp" element={<Dapp />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/updatepassword" element={<UpdatePassword />} />
            <Route path="/deleteprofile" element={<DeleteProfile />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/analysis" element={<Analysis />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
