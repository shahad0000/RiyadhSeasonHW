import React from "react";
import "./styles.css";

const Zone = () => {
  return (
    <div className="mt-4">
        <h1 className="text-white m-3">14 Zones to Explore</h1>
        <div className="row justify-content-center p-4">
        {Array.from({ length: 15 }, (_, i) => (
            <a  key={i} className="col-6 col-md-4 mb-3 zone">
          <img
            className="img-fluid"
            src={`/imgs/card${i + 1}.png`}
            alt=""
          />
          </a>
        ))}
    </div>
    </div>

  );
};

export default Zone;
