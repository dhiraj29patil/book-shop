import React, { useState } from "react";
import axios from "axios";

const AddBooks = () => {

    const [Data, setData] = useState({
        title:"",
        author:"",
        image:""
    });
    const submit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:4000/api/v1/add",Data)
        .then((res) => alert(res.data.message));
        setData({
            title:"",
            author:"",
            image:""
        })
    }
    const change = (e) => {
        const {name,value} = e.target;
        setData({...Data, [name]:value});
    }
    
    return (
        <div className="bg-dark d-flex justify-content-center align-items-center" style={{ minHeight: "91.5vh" }}>
            <div className="container p-4">
                <div className="mb-3 ">
                    <label for="exampleFormControlInput1" 
                        className="form-label text-white">
                            Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter Book Title"
                        name="title"
                        value={Data.title}
                        onChange={change}
                    />
                </div>
                <div className="mb-3 ">
                    <label for="exampleFormControlInput1" 
                        className="form-label text-white">
                            Author
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter the Name of Author"
                        name="author"
                        value={Data.author}
                        onChange={change}
                    />
                </div>
                <div className="mb-3 ">
                    <label for="exampleFormControlInput1" 
                        className="form-label text-white">
                            Image
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter the URL of the Image"
                        name="image"
                        value={Data.image}
                        onChange={change}
                    />
                </div>
                <button type="button" className="btn btn-success my-3" onClick={submit}>Submit</button>
            </div>
        </div>
    )
}

export default AddBooks