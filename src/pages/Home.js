import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/background.jpg'
import '../styles/Home.css'



 function Home() {
    return (
        <div className="home" style={{ backgroundImage : `url(${BannerImage})`}}>
            <div className="headerContainer">
            <h1>TVOJ SLATKIŠ</h1>
            <p>Za svačiji ukus</p>
            <Link to="/menu">
            <button>NARUČI SADA</button>
            </Link>
        
            </div>
        </div>
    )
}
export default Home