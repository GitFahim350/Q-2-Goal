import React, { useEffect } from 'react';

import './App.css';
import LandingPage from './components/LandingPage';
import Signin from './components/Signin';
import { BrowserRouter as Router, Route, Routes ,Navigate,NavLink} from 'react-router-dom'
import Navbar from './components/Navbar';

import {auth} from "./firebase"
import { useDispatch, useSelector } from 'react-redux';
import { login,logout, selectUser } from './features/userSlice';
import Profilescreen from './components/Profilescreen';
import SignIn from './components/Signin';
import MovieDetails from './components/MovieDetails';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  

  // Check if the user variable is null or undefined
  const isLoadingUser = user === null || user === undefined;

  return (
    <div className="App">
      <Router>
        <Navbar />
        {!user?
        (<SignIn/>):
        (
        <Routes>
          <Route path="/profile" element={<Profilescreen />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/movie/:id"
            element={<MovieDetails />}
          />
        </Routes>
        )
        }
        
      </Router>
    </div>
  );
}

export default App;
