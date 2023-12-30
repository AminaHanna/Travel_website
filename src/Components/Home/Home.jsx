import React from 'react'
import { useEffect } from 'react';
import './home.css'
import mountain from '../../Assets/mountain.mp4'
import { FaLocationDot } from "react-icons/fa6";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaTripadvisor } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { TbApps } from "react-icons/tb";

//install aos like...
//npm i aos --save
import Aos from 'aos';
import 'aos/dist/aos.css'



const Home = () => {

// useeffect used to scroll animation
    useEffect(()=>{
        Aos.init({duration:2000})
    }, [])




    return(
        <>
        <section className='home'>
            <div className="overlay"></div>
            <video className='video' src={mountain} muted autoPlay loop type="mountain/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">
                    
                    <span data-aos='fade-up' className="smallText">
                        Our Packages
                    </span>

                    <h1 data-aos='fade-up' className="homeTitle">
                        Search Your Holiday
                    </h1>

                </div>

                <div data-aos='fade-up' className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search Your Destination:</label>
                        <div className="input flex">
                            <input type="text" placeholder='Enter name here...'/>
                            <FaLocationDot className='icon'/>
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Select Your Date:</label>
                        <div className="input flex">
                            <input type="date"/>
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max Price:</label>
                            <h3 className="total">$5000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="5000" min="1000"/>
                        </div>
                    </div>


                    <div className="searchOptions flex">
                        <HiFilter className="icon"/>
                        <span>MORE FILTERS</span>
                    </div>

                </div>

                <div data-aos='fade-up' className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className='icon'/>
                        <FaInstagram className='icon'/>
                        <FaTripadvisor className='icon'/>
                    </div>
                    <div className="leftIcons">
                        <FaListUl className='icon'/>
                        <TbApps className='icon'/>
                    </div>
                </div>

            </div>
        </section>
        </>
    )
}
export default Home