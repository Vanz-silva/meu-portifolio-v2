"use client";

import "bootstrap/dist/css/bootstrap.min.css";


const ResponsiveGrid = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div
          className="col-12 col-sm-4 col-md-4"
          style={{
            backgroundImage: "url(/img/box-cere.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "300px",
          }}
        >
          <div className="d-flex justify-content-center align-items-center h-100 text-white">
            <p>Column 1</p>
          </div>
        </div>
        <div
          className="col-12 col-sm-4 col-md-4"
          style={{
            backgroundImage: "url(/images/image2.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "300px",
          }}
        >
          <div className="d-flex justify-content-center align-items-center h-100 text-white">
            <p>Column 2</p>
          </div>
        </div>
        <div
          className="col-12 col-sm-4 col-md-4"
          style={{
            backgroundImage: "url(/images/image3.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "300px",
          }}
        >
          <div className="d-flex justify-content-center align-items-center h-100 text-white">
            <p>Column 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveGrid;
