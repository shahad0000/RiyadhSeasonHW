import React from "react";
import "./styles.css";
const Recap = () => {
  return (
    <div>
      <section
        id="recap"
        className="container-fluid"
        style={{ height: "90vh" }}
      >
        <svg
          className="recap-bg"
          viewBox="0 0 812 705"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ zIndex: -1 }}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M811.5 705H596.5H401.5L309.092 648.995L-36 449.991C81.9193 271.136 235.461 117.778 414.53 0L811.5 705Z"
            fill="#987BFF"
          ></path>
        </svg>
        <div
          style={{ position: "relative" }}
          className="recap container-fluid align-items-center"
        >
          <div className="row  justify-content-around align-items-center">
            <div className="col-12 col-md-5">
              <img
                src="https://images.ctfassets.net/vy53kjqs34an/1gbFl4Q7C1bI7YyssruI2V/637b666df8a9d2330d6e6ea81b7fe307/Button-3.png?fm=webp&amp;w=70&amp;h=70"
                width="70"
                height="70"
                alt="Watch Riyadh Season 2023 Recap"
              />
              <h3 className="my-4 text-white">
                Watch Riyadh Season 2023 Recap
              </h3>
              <div className="d-flex gap-4">
                <a
                  className="border p-2"
                  href="https://www.youtube.com/c/riyadhseason"
                  rel="noopener noreferrer"
                  aria-label="Watch more moments"
                  target="_blank"
                >
                  Watch more moments
                </a>
              </div>
            </div>
            <video
              poster="https://images.ctfassets.net/vy53kjqs34an/5PcL5NRQvrljV31YLYi2UE/738df0fc1368a14eaec969afc8eb555a/Screenshot_2024-09-02_192441.png"
              playsInline
              disablePictureInpicture
              className="cursor-pointer col-11 col-md-6 d-flex justify-content-center"
              height="400"
              width="800"
              controls
            >
              <source
                src="https://videos.ctfassets.net/vy53kjqs34an/6Bq1C6PdoQXs4MSQWZS2tp/9eab192d3c853c6d0a156255a57143e6/Revision_3.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className=" d-flex justify-content-center mt-3">
            <a
              className="border rounded-3 p-2"
              href="https://www.youtube.com/c/riyadhseason"
              rel="noopener noreferrer"
              aria-label="Watch more moments"
              target="_blank"
            >
              Watch more moments
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recap;
