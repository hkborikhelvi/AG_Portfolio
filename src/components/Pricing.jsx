import React from 'react'
import "../App.css"
import "./Pricing.css"
import { pricingData, pricingCard } from '../assets/Data/pricingData'

const Pricing = () => {
    return (
        <>
            <section id="price">
                <div className="container">
                    <div className="pt-5 mt-5 mb-5 pb-5">
                        <div>
                            {pricingData.map((val, i) => {
                                return (
                                    <div key={i} className='pricing d-flex flex-column align-items-center'>
                                        <img src={val.image} alt="" />
                                        <span>{val.title}</span>
                                        <h3>{val.heading}</h3>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="pricingCards d-flex flex-wrap justify-content-center gap-3">
                            {
                                pricingCard.map((val, i) => {
                                    return (
                                        <div className='pricingCard'>
                                            <div key={i} className="title d-flex">
                                                <img src={val.title.image} alt="Plan img" />
                                                <span>
                                                    <p>{val.title.priceType}</p>
                                                    <h5>{val.title.price}</h5>
                                                </span>
                                                <span>{val.title.billing}</span>
                                            </div>
                                            <button>{val.button}</button>
                                            <hr />
                                            <div>
                                                {val.facilities.map((facility, i) => (
                                                    <ul key={i}>
                                                        <li>
                                                            {facility.service1}
                                                        </li>
                                                        <li>
                                                            {facility.service2}
                                                        </li>
                                                        <li>
                                                            {facility.service3}
                                                        </li>
                                                        <li>
                                                            {facility.service4}
                                                        </li>
                                                        <li>
                                                            {facility.service5}
                                                        </li>
                                                    </ul>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing