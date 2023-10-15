import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import BooksSection from "../components/BooksSection";

const Book = () => {
    const [Data, setData] = useState();
    useEffect(() => {
        const fetch = async () => {
            await axios
            .get("http://localhost:4000/api/v1/getBooks")
            .then((res) => setData(res.data.books));
        };
        fetch();
    });
    return (
        <div className="bg-dark bg" style={{ minHeight: "100vh"}}>
            <div className="d-flex justify-content-center align-items-center py-5">
                <h4 className="text-white py-3" style={{fontSize:"50px"}}>Books Section</h4>   
            </div>
            {Data ? ( 
                <BooksSection data={Data} />
            )    :  (
                <div className="text-white">
                    Loading...
                </div> 
            )}
        </div>
    )
}

export default Book