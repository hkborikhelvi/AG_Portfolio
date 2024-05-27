/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import "../App.css"
import "./Home.css"

const Home = () => {
    return (
        <>
            <section id="home">
                <div className="homeBG align-content-center">
                    <div className="container">
                        <div className="row home">
                            <div className="homeContent col-lg-6">
                                <span>//Agency</span>
                                <h2>Quality <span>Website Design</span> and <span>Development</span> Service</h2>
                                <p>Access Group is the best website access designing and development company offering professionals, client-focused, and customer-centric websites that boost your business and generate success. From Our professional Website access and development services to an e-commerce store, we do everything in between. Just inform us what your imaginary website looks like and we’ll make that reality that brings customers in and perform your ultimate goal.</p>
                                <div className="">
                                    <button className="btn btn-dark">Our Services</button><button className="btn border-black border-1 ms-2">Get Started</button>
                                </div>
                            </div>
                            <div className="homeImage col-lg-6">
                                <img src="https://ik.imagekit.io/abzkdd8q5/Images/heroSection/website%20illustration.png?updatedAt=1716563690546" alt="web illustration" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home