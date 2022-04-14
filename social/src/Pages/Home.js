import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ChatWithUs from "../Components/ChatWithUs";
import "./Home.css";
export default function Home() {
  return (
    <div>
      <Navbar />
      <ChatWithUs />
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner fix_height">
          <div className="carousel-item active">
            <img
              src="https://res.cloudinary.com/iit-bhu/image/upload/v1649255158/shutterstock-1341363119-1559628862_bdmx8f.jpg"
              className="d-block w-100 set_img"
              alt="..."
            ></img>

            <div className="carousel-caption d-none d-md-block">
              <h5>Book Distribution</h5>
              <p>
                We provide free books to the needy by collecting older books
                from donations.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://res.cloudinary.com/iit-bhu/image/upload/v1649255256/55736594-2481005588610482-298706836473774080-n-cropped-1559627984_vqzjzo.jpg"
              className="d-block w-100 set_img"
              alt="..."
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>Cloth Distribution</h5>
              <p>We distribute the donated clothes to the needy.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://res.cloudinary.com/iit-bhu/image/upload/v1649256008/c5b8cb61-ed11-40eb-a451-275c210e3256_e85vk3.jpg"
              className="d-block w-100 set_img"
              alt="..."
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>Feeding Stray Animals</h5>
              <p>We care for animals also and try to cater them too.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="w-80 mx-auto mt-5">
        <h1 className="text-center my-2">Our Vision</h1>
        <h2 className="text-center my-5">
          Through our vision and mission we have transformed the life of many.
        </h2>
        <div className="container">
          <div className="row card_res">
            <div className="col-md-6">
              <div className="card flex-md-row mb-4 box-shadow h-md-250">
                <div className="card-body d-flex flex-column align-items-start">
                  <p className="card-text my-auto h3">
                    Child Protection and their welfare is an integeral part of
                    our programme. We thrive for their better health and future
                  </p>
                </div>
                <img
                  className="card-img-right flex-auto d-none d-md-block card_img"
                  data-src="holder.js/200x250?theme=thumb"
                  alt="Thumbnail [200x250]"
                  src="https://res.cloudinary.com/iit-bhu/image/upload/v1649887486/social-care_jz0vdy.png"
                  data-holder-rendered="true"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card flex-md-row mb-4 box-shadow h-md-250">
                <div className="card-body d-flex flex-column align-items-start">
                  <p className="card-text my-auto h3">
                    Better health and Nutrition for all and making India disease
                    free is one of our prime goal
                  </p>
                </div>
                <img
                  className="card-img-right flex-auto d-none d-md-block card_img"
                  data-src="holder.js/200x250?theme=thumb"
                  alt="Thumbnail [200x250]"
                  src="https://res.cloudinary.com/iit-bhu/image/upload/v1649888846/healthcare_ntclpe.png"
                  data-holder-rendered="true"
                />
              </div>
            </div>
          </div>
          <div className="row card_res">
            <div className="col-md-6">
              <div className="card flex-md-row mb-4 box-shadow h-md-250">
                <div className="card-body d-flex flex-column align-items-start">
                  <p className="card-text my-auto h3">
                    Creating Awareness about education and making it accessible
                    for all.
                  </p>
                </div>
                <img
                  className="card-img-right flex-auto d-none d-md-block card_img"
                  data-src="holder.js/200x250?theme=thumb"
                  alt="Thumbnail [200x250]"
                  src="https://res.cloudinary.com/iit-bhu/image/upload/v1649889162/video-conference_ag6bu3.png"
                  data-holder-rendered="true"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card flex-md-row mb-4 box-shadow h-md-250">
                <div className="card-body d-flex flex-column align-items-start">
                  <p className="card-text my-auto h3">
                    Eradicating Poverty by skill development and mentoring them
                    so that they become self reliant
                  </p>
                </div>
                <img
                  className="card-img-right flex-auto d-none d-md-block card_img"
                  data-src="holder.js/200x250?theme=thumb"
                  alt="Thumbnail [200x250]"
                  src="https://res.cloudinary.com/iit-bhu/image/upload/v1649889330/job-search_urejim.png"
                  data-holder-rendered="true"
                />
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-center my-5">
          Some Of The Major Problems Of the Society
        </h1>
        <div className="w-75 mx-auto col-md-3">
          <div className="well text-center align_card">
            <div className="card card_body m-2">
              <img
                src="https://res.cloudinary.com/iit-bhu/image/upload/v1649890770/reader_stiksi.png"
                className="card-img-top img_rule"
                alt="..."
              ></img>
              <div className="card-body">
                <h2 className="card-title">Illiteracy</h2>
              </div>
            </div>
            <div className="card card_body m-2">
              <img
                src="https://res.cloudinary.com/iit-bhu/image/upload/v1649890958/istockphoto-1167665977-612x612_bej7do.jpg"
                className="card-img-top img_rule"
                alt="..."
              ></img>
              <div className="card-body">
                <h2 className="card-title">Malnourishment</h2>
              </div>
            </div>
            <div className="card card_body m-2">
              <img
                src="https://res.cloudinary.com/iit-bhu/image/upload/v1649891469/clip-art-vector-graphics-wealth-illustration-poverty-png-favpng-U8H6yNxLh9rGCqMPqmYKE64gu_dqnssa.jpg"
                className="card-img-top img_rule"
                alt="..."
              ></img>
              <div className="card-body">
                <h2 className="card-title">Poverty</h2>
              </div>
            </div>
            <div className="card card_body m-2">
              <img
                src="https://res.cloudinary.com/iit-bhu/image/upload/v1649891609/stop-animal-abuse-paw-stamp-vector-violence-agaist-182016871_ly3was.jpg"
                className="card-img-top img_rule"
                alt="..."
              ></img>
              <div className="card-body">
                <h2 className="card-title">Animal Abuse</h2>
              </div>
            </div>
            <div className="card card_body m-2">
              <img
                src="https://res.cloudinary.com/iit-bhu/image/upload/v1649891808/hygiene_lczxeu.png"
                className="card-img-top img_rule"
                alt="..."
              ></img>
              <div className="card-body">
                <h2 className="card-title">Health and Hygiene</h2>
              </div>
            </div>
            <div className="card card_body m-2">
              <img
                src="https://res.cloudinary.com/iit-bhu/image/upload/v1649891914/no-skills-white-d-character-dressed-chained-to-iron-ball-which-written-52988973_vrcwsr.jpg"
                className="card-img-top img_rule"
                alt="..."
              ></img>
              <div className="card-body">
                <h2 className="card-title">Lack of Skills</h2>
              </div>
            </div>
            <h2 className="text-center my-5 text_mobile">Through Our Campaigns We try to support every needy and also seek help and support from our Donors through which we are able to imagine to make some difference in the society.</h2>
          </div>
        </div>
      </div>      
      <Footer />
    </div>
  );
}
