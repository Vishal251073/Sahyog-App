import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Helmet } from "react-helmet";
export default function DonatePage() {
  return (
    <div className="center">
      <Navbar />


      {/* <div className="card mx-auto w-75">
          <div className="card-body">

          </div>
      </div> */}
      <form
        className="text-center border border-light p-5"
        action="success"
        method="POST"
      >

        <input
          type="name"
          name="name"
          id="name"
          required
          className="form-control mb-4"
          placeholder="Name"
        ></input>
        <Helmet>
          <script
            src="https://checkout.razorpay.com/v1/checkout.js"
            data-key="rzp_test_9nmrK825fjo0Ym"
            data-amount="50000"
            data-currency="INR"
            data-order_id="{{payment.id}}"
            data-buttontext="Pay with Razorpay"
            data-name="Professional Cipher"
            data-description="Django and Data Science"
            data-image="https://example.com/your_logo.jpg"
            // data-prefill.name="PC"
            // data-prefill.email="pc@studygyaan.com"
            // data-theme.color="#F37254"
          ></script>
        </Helmet>
      </form>
      <Footer />
    </div>
  );
}
