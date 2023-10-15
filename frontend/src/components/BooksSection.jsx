import React from "react";

const BooksSection = ({ data }) => {
    console.log(data);
    return (
        <div className="d-flex justify-content-around align-items-center flex-wrap">
            {data &&
                data.map((item, index) => (
                    <div className="m-3"
                        style={{
                            width: "270px",
                            height: "390px",
                            border: "1px solid white",
                            borderRadius: "20px"
                        }}
                    >
                        <div>
                            <img style={{ width: "270px", height: "280px",borderTopLeftRadius:"20px",borderTopRightRadius:"20px" }} className="img-fluid" src={item.image} alt="/" />
                        </div>
                        
                        <h6 style={{ fontSize: "15px" }} className="px-1 p-2 text-white">
                            {item.title} by <b style={{ fontSize: "18px" }}>{item.author}</b>
                        </h6>
                        
                    </div>
                ))}
        </div>
    );
};

export default BooksSection