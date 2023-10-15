import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    const image = require("../images/img6.png")
    return (
        <div className="Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center bg">
            <div className="row container">
                
                <div
                    className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
                    style={{ height:"91.5vh" }}
                >
                    <img className="img-fluid homeimg" 
                        src={image} 
                        alt="/"
                    />
                </div>
                <div 
                    className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
                    style={{ height:"91.5vh" }}
                >
                    
                    <div className="underlined-text">
                        <h1 style={{fontSize:"70px"}}>BOOK STORE</h1>
                    </div>    <br></br>
                    <h4 style={{fontSize: "40px"}}>Welcome to the </h4>
                    <h2 style={{fontSize:"60px"}}>World of Wisdom</h2>
                    <p className="my-0" style={{ color: "white", fontSize: "20px" }}>Your Journey Begins Here – Grab a Book</p>
                    <Link to="/books" className="viewBook my-4">View Books</Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Home