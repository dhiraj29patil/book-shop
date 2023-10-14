import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    const image = require("../images/book.jpg")
    return (
        <div className="Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center">
            <div className="row container">
                <div 
                    className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
                    style={{ height:"91.5vh" }}
                >
                    <h4 style={{fontSize: "50px"}}>Welcome to the </h4>
                    <h2 style={{fontSize:"70px"}}>World of Wisdom</h2>
                    <p className="mb-0" style={{ color: "silver" }}>Your Journey Begins Here – Grab a Book</p>
                    <Link to="/books" className="viewBook my-3">View Books</Link>
                </div>
                <div
                    className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
                    style={{ height:"91.5vh" }}
                >
                    <img className="img-fluid homeimg" 
                        src={image} 
                        alt="/"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home