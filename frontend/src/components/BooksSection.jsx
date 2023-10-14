import React from "react";

const BooksSection = ({ data }) => {
    console.log(data);
    return (
        <div className="d-flex justify-content-around align-items-center flex-wrap">
            {data &&
                data.map((item, index) => (
                    <div className="m-3"
                        style={{
                            width: "200px",
                            height: "320px",
                            border: "1px solid white",
                            borderRadius: "20px"
                        }}
                    >
                        <div>
                            <img style={{ width: "200px", height: "210px",borderTopLeftRadius:"20px",borderTopRightRadius:"20px" }} className="img-fluid" src={item.image} alt="/" />
                        </div>
                        <h6 style={{ fontSize: "15px" }} className="px-2 p-3 text-white">
                            {item.title.slice(0, 20)}...
                        </h6>
                        <div className="d-flex justify-content-around">
                            <button type="button" className="btn btn-primary">Update</button>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default BooksSection