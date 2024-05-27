/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import "../App.css"
import "./Services.css"
import servicesData from '../assets/Data/servicesData'

const Services = () => {
    return (
        <>
            <section id="services">
                <div className="container">
                    <div className="pt-5 mt-5 mb-5 pb-5">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-md-6 d-flex serContent">
                                <img src="https://ik.imagekit.io/abzkdd8q5/Images/servicesSection/servIcon.png?updatedAt=1716563693563" alt="Services Icon" />
                                <span>// 01 . Services</span>
                                <h3>High-impact services to take your business to the next level</h3>
                            </div>
                            <div className=' col-md-6'>
                                <button className="btn btn-dark">Our Services <span><img src="https://ik.imagekit.io/abzkdd8q5/Images/servicesSection/Vector.png?updatedAt=1716563716618" alt="Arrow img" /></span></button>
                            </div>
                        </div>
                        {/*=====================
                        service cards starts 
                        =======================*/}
                        <div className="row d-flex flex-wrap gap-3 justify-content-center">
                            {servicesData.map((val, i) => {
                                return (
                                    <div key={i} className="p-4 mt-5 text-light m-1 selfCard">
                                        <img src={val.image} className="card-img-top w-50" alt="Service Icon" />
                                        <div className="cardContent">
                                            <h5 className="card-title">{val.title}</h5>
                                            <p className="card-text">{val.description}</p>
                                            <a href="/" className="cardBbtn">{val.button} <span className='ms-3'><img src="https://ik.imagekit.io/abzkdd8q5/Images/servicesSection/Vector.png?updatedAt=1716563716618" alt="Arrow img" /></span></a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Services