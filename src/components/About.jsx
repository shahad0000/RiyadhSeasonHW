import React from "react";
import "./styles.css";
const About = () => {
  return (
    <div>
      <section className="container-fluid text-white">
        <div className="row justify-content-around">
          <div className="col-11 col-md-6">
            <div style={{ backgroundColor: "black" }} className="card row">
              <div className="row mb-3">
                <div className="mx-3 col-4 d-flex justify-content-center bg-dark rounded">
                  <img
                    className="img-fluid bg-dark my-4"
                    src="https://images.ctfassets.net/vy53kjqs34an/3Psaka2Ja20ebl34oSkWs5/2a7e698f9f5d84ff29351ad9eb39bde5/Logo_icon.svg?fm=webp&amp;w=150&amp;h=150"
                    width="150"
                    height="150"
                    alt="Plain logo"
                  />
                </div>
                <div className="card-body col-7 bg-dark rounded">
                  <p className="card-title"> About Riyadh Season</p>
                  <p className="card-text">
                    Riyadh Season is one of the world’s largest winter
                    entertainment event. Variety of food from around the world,
                    courtesy of exclusive restaurants — plus countless exciting
                    surprises. The festivities capture the essence of Saudi,
                    from its Najdi heritage to its present-day dynamism.
                  </p>
                </div>
              </div>
            </div>
                <div className="text-center card bg-dark rounded mb-3">
                  <p className="font-semibold uppercase">Starts</p>
                  <p className="font-bold">12</p>
                  <p className="text-sm">October</p>
                </div>   
          </div>
          <iframe
            title="RS Promo 2023"
            width="100%"
            className="col-12 col-md-5"
            src="https://www.youtube.com/embed/g8-NjAOWhME?&amp;autoplay=1"
            allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
            </iframe>
        </div>
      </section>
    </div>
  );
};

export default About;
