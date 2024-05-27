import React from 'react'
import "../App.css"
import "./AboutUs.css"
import { aboutData, aboutMain } from '../assets/Data/aboutData'

let aboutdata = aboutData[0];
let aboutmain = aboutMain[0];

const AboutUs = () => {
    return (
        <>
            <section id="aboutUs">
                <div className="container">
                    <div className="bg pt-5 mt-5 mb-5 pb-5">
                        <div className='d-flex justify-content-center'>
                            <img src={aboutdata.image} alt="" />
                            <span>
                                <p>{aboutdata.title}</p>
                                <h3>{aboutdata.heading}</h3>
                            </span>
                        </div>
                        <div className='aboutMain row d-flex align-items-center'>
                            <div className='col-md-6'>
                                <h4>{aboutmain.heading}</h4>
                                <p>{aboutmain.description}</p>
                            </div>
                            <div className='col-md-6'>
                                <img src={aboutmain.image} alt={aboutmain.alt} />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default AboutUs