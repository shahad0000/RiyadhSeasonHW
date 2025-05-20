import React from "react";
import "./styles.css";
const Navbar = () => {
  return (
    <nav
      className="navbar d-flex justify-content-between position-fixed"
      style={{ zIndex: 1050 }}
    >
      <div className="container-fluid flex-wrap">
        <div style={{ width: "20%" }}>
          <img width={23} src="/imgs/burgerMenu.png" alt="" />
        </div>
        <div className=" d-flex bg-dange justify-content-center" style={{ width: "40%" }}>
          <img
            style={{ objectFit: "contain" }}
            src="/imgs/website_RiyadhSeason_w.png"
            alt="Riyadh Season Logo"
          />
        </div>
        <div
          style={{ width: "20%" }}
          className="d-flex  justify-content-end align-items-baseline"
        >
          <h4 className="text-white mx-4 ">العربية</h4>
          <button className="btn btn-primary">View Booklet</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
