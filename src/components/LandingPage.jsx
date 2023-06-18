import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import requests from '../requests'
import Row from './Row'
import Footer from './Footer'

function LandingPage() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Row title="Netflix originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Footer/>
    
    </div>
  )
}

export default LandingPage