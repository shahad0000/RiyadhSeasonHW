import React from "react";
import "./styles.css";

const Hero = () => {
  return (
    <div >
      <section
        id="RS-hero"
        className=" position-relative overflow-hidden"
        style={{ height: "100vh", width: "100vw" }}
      >
        <video
        className="w-100 h-100 "
        style={{ objectFit: "cover", zIndex: -1  }}
          playsInline
          disablePictureInPicture
          autoPlay
          loop
          muted
        >
          <source
            src="https://videos.ctfassets.net/vy53kjqs34an/6Bq1C6PdoQXs4MSQWZS2tp/9eab192d3c853c6d0a156255a57143e6/Revision_3.mp4"
            type="video/mp4"
          />
        </video>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "70%",
            background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
            zIndex: 0,
          }}
        ></div>
        <div style={{position: "relative"}} className="hero-content text-white row justify-content-between align-items-end px-5">
          <h1 style={{fontWeight: 700}} className="display-3 col-12 col-md-7">Welcome to Riyadh Season 2024</h1>
          <div className="d-flex justify-content-start justify-content-md-end gap-3 col-10 col-md-4 p-3">
            <a className="btn text-white" aria-label="Explore">
              Explore
            </a>
            <a
              className="btn btn-primary d-flex align-items-center gap-2"
              href="https://webook.com/en/season/riyadh-season-2024"
              rel="noopener noreferrer"
              aria-label="Book Tickets"
              target="_blank"
            >
              <img
                src="https://images.ctfassets.net/vy53kjqs34an/70gUZ6vDCLCNWIW9wIFxrS/e92d2395ea2faf07034dd41074ea7aa9/Ticket.svg?fm=webp&amp;fit=pad&amp;w=20&amp;h=20"
                width="20"
                height="20"
                alt="Ticket White Icon"
                className="shrink-0"
              />
              Book Tickets
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
