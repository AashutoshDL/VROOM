import { useState, useEffect } from "react";
import "./contactUs.css";
import { FaQuestionCircle } from "react-icons/fa";
import Footer from "../Footer/Footer";
import image from "../ImagesFol/square.png";
const contact = () => {const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Clear form fields after submission
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  return (
    <div className="contact-container">
      <h2 id="head-title">FAQs</h2>
      <div className="questions">
        <div className="faq-display">
          <div className="question-icons">
            <FaQuestionCircle size={50}/>
          </div>
          <p className="q-texts">How do I make a reservation?</p>
        </div>

        <div className="faq-display">
          <div className="question-icons">
            <FaQuestionCircle size={50}/>
          </div>
           <p className="q-texts">What insurance options do you offer?</p>
        </div>

        <div className="faq-display">
          <div className="question-icons">
            <FaQuestionCircle size={50}/>
          </div>
           <p className="q-texts">Are there any age restrictions on renting a car?</p>
        </div>
      </div>
      <div className="answers">
        <div className="answer-part1">
          <h3 id="ans-1">Detailed Answers</h3>
        </div>
        <div className="answer-part2">
          <div className="sub-answers">
           <img src={image} className="sub-image" alt="" />
            <h5 id="q1">How do I make a reservation?</h5>
            <p className="ans-text">You can make a reservation online through our <br/>website or by calling our customer service team. w..</p>
          </div>
          <div className="sub-answers">
          <img src={image} className="sub-image" alt="" />
            <h5 id="q2">What insurance options do you offer?</h5>
            <p className="ans-text">We provide basic insurance coverage with options <br/>to upgrade to comprehensive coverage for an addit..</p>
          </div>
          <div className="sub-answers">
          <img src={image} className="sub-image" alt="" />
            <h5 id="q3">Are there age restrictions for renting a car?</h5>
            <p className="ans-text">Drivers must be at least 21 years old with a valid driver's license. <br/>Additional fees may appy for drivers under the age of..</p>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <h3 id="formtitle">Still have questions?</h3>
        <h6 id="sub-formtitle">Reach out to us by filling out the form below. We'll get back to you as soon as possible.</h6>
        <form className="message-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button className="form-btn" type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default contact;
