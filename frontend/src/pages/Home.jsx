import React from "react";
import "./Home.css";

const Home = () => {
    const image = require("../images/book.jpg")
    return (
        <div className="Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center">
            <div className="row container">
                <div 
                    className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
                    style={{ height:"91.5vh" }}
                >
                    <h2 style={{fontSize: "70px"}}>Welcome to the World of Wisdom</h2>
                    <button className="viewBook my-3">View Books</button>
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