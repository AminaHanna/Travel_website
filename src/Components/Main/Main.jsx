import React, { useEffect } from 'react'
import './main.css'
import { HiLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";
import img1 from '../../Assets/zurich.jpg'
import img2 from '../../Assets/zermatt.jpg'
import img3 from '../../Assets/InterLaken.jpg'
import img4 from '../../Assets/geneva_water-fountain.jpg'
import img5 from '../../Assets/chillon-castle.jpg'
import img6 from '../../Assets/chapelbridge.jpg'
import img7 from '../../Assets/basel.jpg'
import img8 from '../../Assets/jungfraujoch.jpg'
import img9 from '../../Assets/matterhorn.jpg'
import img10 from '../../Assets/rhine-falls.jpg'
import img11 from '../../Assets/saint-moritz.jpg'
import img12 from '../../Assets/park.jpg'



import Aos from 'aos';
import 'aos/dist/aos.css'



let Data=[
    {
        id:1,
        imgSrc:img1,
        destTitle:"Zurich",
        // location:"New Zealand",
        grade:"CULTURAL RELAX",
        fees:"$700",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eligendi sequi quas architecto sit exercitationem eum asperiores omnis, nam esse incidunt animi quaerat cum aut. Magnam nihil inventore necessitatibus veniam."
    },
    {
        id:2,
        imgSrc:img2,
        destTitle:"Zermatt",
        // location:"New Zealand",
        grade:"CULTURAL RELAX",
        fees:"$700",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eligendi sequi quas architecto sit exercitationem eum asperiores omnis, nam esse incidunt animi quaerat cum aut. Magnam nihil inventore necessitatibus veniam."
    },
    {
        id:3,
        imgSrc:img3,
        destTitle:"Interlaken",
        // location:"New Zealand",
        grade:"CULTURAL RELAX",
        fees:"$700",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eligendi sequi quas architecto sit exercitationem eum asperiores omnis, nam esse incidunt animi quaerat cum aut. Magnam nihil inventore necessitatibus veniam."
    },
    {
        id:4,
        imgSrc:img4,
        destTitle:"The Geneva Water Fountain",
        // location:"New Zealand",
        grade:"CULTURAL RELAX",
        fees:"$700",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eligendi sequi quas architecto sit exercitationem eum asperiores omnis, nam esse incidunt animi quaerat cum aut. Magnam nihil inventore necessitatibus veniam."
    },
    {
        id:5,
        imgSrc:img5,
        destTitle:"Chillon Castle",
        // location:"New Zealand",
        grade:"CULTURAL RELAX",
        fees:"$700",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eligendi sequi quas architecto sit exercitationem eum asperiores omnis, nam esse incidunt animi quaerat cum aut. Magnam nihil inventore necessitatibus veniam."
    },
    {
        id:6,
        imgSrc:img6,
        destTitle:"Chapel Bridge",
        // location:"New Zealand",
        grade:"CULTURAL RELAX",
        fees:"$700",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eligendi sequi quas architecto sit exercitationem eum asperiores omnis, nam esse incidunt animi quaerat cum aut. Magnam nihil inventore necessitatibus veniam."
    },
    {
        id:7,
        imgSrc:img7,
        destTitle:"Basel",
        // location:"New Zealand",
        grade:"CULTURAL RELAX",
        fees:"$700",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eligendi sequi quas architecto sit exercitationem eum asperiores omnis, nam esse incidunt animi quaerat cum aut. Magnam nihil inventore necessitatibus veniam."
    },
    {
        id:8,
        imgSrc:img8,
        destTitle:"Jungfraujoch",
        // location:"New Zealand",
        grade:"CULTURAL RELAX",
        fees:"$700",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eligendi sequi quas architecto sit exercitationem eum asperiores omnis, nam esse incidunt animi quaerat cum aut. Magnam nihil inventore necessitatibus veniam."
    },
    {
        id:9,
        imgSrc:img9,
        destTitle:"Matterhorn",
        // location:"New Zealand",
        grade:"CULTURAL RELAX",
        fees:"$700",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eligendi sequi quas architecto sit exercitationem eum asperiores omnis, nam esse incidunt animi quaerat cum aut. Magnam nihil inventore necessitatibus veniam."
    },
    {
        id:10,
        imgSrc:img10,
        destTitle:"Rhine Falls",
        // location:"New Zealand",
        grade:"CULTURAL RELAX",
        fees:"$700",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eligendi sequi quas architecto sit exercitationem eum asperiores omnis, nam esse incidunt animi quaerat cum aut. Magnam nihil inventore necessitatibus veniam."
    },
    {
        id:11,
        imgSrc:img11,
        destTitle:"Saint Moritz",
        // location:"New Zealand",
        grade:"CULTURAL RELAX",
        fees:"$700",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eligendi sequi quas architecto sit exercitationem eum asperiores omnis, nam esse incidunt animi quaerat cum aut. Magnam nihil inventore necessitatibus veniam."
    },
    {
        id:12,
        imgSrc:img12,
        destTitle:"Saint Moritz",
        // location:"New Zealand",
        grade:"CULTURAL RELAX",
        fees:"$700",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eligendi sequi quas architecto sit exercitationem eum asperiores omnis, nam esse incidunt animi quaerat cum aut. Magnam nihil inventore necessitatibus veniam."
    }
]



const Main = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    }, [])

  


    return(
        <>
        <section className='main container section'>
            <div className="secTitle">
                <h3 data-aos='fade-right' className="title">
                    Most Visited Destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
                        return(
                            <>
                            <div key={id} data-aos='fade-up' className='singleDestination'>

                                <div className="imageDiv">
                                    <img className='img' src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className='continent flex'>
                                        <HiLocationMarker className='icon'/>
                                        <span className='name'>SWITZERLAND</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small className='small'>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn'>
                                        DETAILS <LuClipboardCheck className='icon'/>
                                    </button>


                                </div>

                            </div>
                            </>
                        )
                    })
                }
            </div>

        </section>
        </>
    )
}
export default Main