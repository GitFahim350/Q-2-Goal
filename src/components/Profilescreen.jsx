import React from 'react'
import Navbar from './Navbar'
import Netflixprofile from "../images/Netflix-avatar.png"
import './profilescreen.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';

const Profilescreen = () => {

  const user=useSelector(selectUser);
  return (
    
   
    <div className="profileScreen">
        <Navbar/>
        <div className='profilescreen_body'>
          <br />
          <br />
            <h1>Edit profile</h1>
            <div className='profile_screen_info'>
            <img src={Netflixprofile} alt="My Image" />
            <div>
              <h3>{user && user.email}</h3>
            </div>

            {user && <button onClick={()=>{
              auth.signOut()
              .then(() => {
                // Redirect to the '/' route
                window.location.href = '/';
              })
              .catch((error) => {
                // Handle any error that occurs during signout
                console.log('Signout error:', error);
              });
            }}>Signout</button>}
          </div>
        </div>

    </div>
    
  )
}

export default Profilescreen