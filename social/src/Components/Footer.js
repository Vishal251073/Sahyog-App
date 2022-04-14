import React from "react";

export default function Footer() {
  return (
    <div className="bg-light">
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-md-2 col-sm-12">
              <h5>Discover</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Explore Campaigns
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Careers
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-sm-12 col-md-2">
              <h5>Get Involved</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Donate
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Volunteer
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Partnerships
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Legacy
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-sm-12 col-md-2">
              <h5>Contact Us</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    <i class="fas fa-map-marker-alt"></i>
                    <strong> Head Office india</strong>
                  </a>
                  First floor, VCC Mall Civil Lines Banglore
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    <i class="fas fa-phone-alt"></i> +91-6387679871
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    <i class="fas fa-envelope"></i> info@shayog.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-4 offset-1">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div className="d-flex w-100 gap-2">
                  <label for="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  ></input>
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
              <ul className="list-unstyled d-flex justify-content-center">
                <li>
                  <a href="https://www.facebook.com/">
                    <img
                      src="https://res.cloudinary.com/iit-bhu/image/upload/v1649309690/icons8-facebook_lceiqv.svg"
                      alt=""
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <img
                      src="https://res.cloudinary.com/iit-bhu/image/upload/v1649310133/icons8-instagram_z84nlj.svg"
                      alt=""
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/vishal-das-2a2808201/">
                    <img
                      src="https://res.cloudinary.com/iit-bhu/image/upload/v1649310305/icons8-linkedin_lzmj7b.svg"
                      alt=""
                    ></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex justify-content-between py-4 my-4 border-top">
            <p>© 2022, Sahyog Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
