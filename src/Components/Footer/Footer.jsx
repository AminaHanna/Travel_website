import React, { useEffect } from 'react'
import './footer.css'
import video2 from '../../Assets/v2.mp4'
import { IoMdSend } from "react-icons/io";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css'



const Footer = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    }, [])

    return(
        <>
        <section className='footer'>
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type='video/mp4'></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos='fade-up' className="text">
                        <small className='small'>KEEP IN TOUCH</small>
                        <h2 className='h2'>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos='fade-up' className='input' type="text" placeholder='Enter Email Address' />
                        <button data-aos='fade-up' className='btn flex' type='submit'>
                        SEND <IoMdSend className='icon'/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className='logo flex'>
                            <MdOutlineTravelExplore className="icon"/> Travel.
                            </a>
                        </div>

                        <div data-aos='fade-up' className="footerParagraph">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, a error? Voluptatem eius sed excepturi sint, minus beatae at autem iure aspernatur earum similique, doloremque harum. Sapiente fuga debitis provident.
                        </div>

                        <div data-aos='fade-up' className="footerSocials flex">
                        <FaTwitter className='icon'/>
                        <FaYoutube className='icon'/>
                        <FaInstagram className='icon'/>
                        <FaTripadvisor className='icon'/>
                        </div>
                    </div>

                    <div className="footerLinks grid">

                        {/* group-1 */}
                        <div data-aos='fade-up' data-aos-duration='3000' className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                            <FaChevronRight className='icon'/>
                            Services
                            </li>
                            <li className="footerList flex">
                            <FaChevronRight className='icon'/>
                            Insurance
                            </li>
                            <li className="footerList flex">
                            <FaChevronRight className='icon'/>
                            Agency
                            </li>
                            <li className="footerList flex">
                            <FaChevronRight className='icon'/>
                            Tourism
                            </li>
                            <li className="footerList flex">
                            <FaChevronRight className='icon'/>
                            Payment
                            </li>
                        </div>

                        {/* group2 */}
                        <div data-aos='fade-up' data-aos-duration='4000' className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                            <FaChevronRight className='icon'/>
                            Bookings
                            </li>
                            <li className="footerList flex">
                            <FaChevronRight className='icon'/>
                            Rentcars
                            </li>
                            <li className="footerList flex">
                            <FaChevronRight className='icon'/>
                            HostelWorld
                            </li>
                            <li className="footerList flex">
                            <FaChevronRight className='icon'/>
                            Trivago
                            </li>
                            <li className="footerList flex">
                            <FaChevronRight className='icon'/>
                            TripAdvisor
                            </li>
                        </div>

                        {/* group3 */}
                        <div data-aos='fade-up' data-aos-duration='5000' className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerList flex">
                            <FaChevronRight className='icon'/>
                            London
                            </li>
                            <li className="footerList flex">
                            <FaChevronRight className='icon'/>
                            California
                            </li>
                            <li className="footerList flex">
                            <FaChevronRight className='icon'/>
                            Indonesia
                            </li>
                            <li className="footerList flex">
                            <FaChevronRight className='icon'/>
                            Europe
                            </li>
                            <li className="footerList flex">
                            <FaChevronRight className='icon'/>
                            Oceania
                            </li>
                        </div>



                    </div>


                    <div className="footerDiv flex">
                        <small className='small'>BEST TRAVEL WEBSITE THEME</small>
                        <small className='small'>COPYRIGHTS RESERVED 2023</small>
                    </div>

                </div>
            </div>
        </section>
        </>
    )
}
export default Footer