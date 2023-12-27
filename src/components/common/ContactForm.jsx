import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {

  const [values, setValues] = useState({
name:"", email:"",message:""
  })

const handleChange = (e) => {
  const {name, value} = e.target;
  setValues({...values, [name]: value})
}

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/santarun/form-submit", values);
      setValues(response.data)
      console.log("!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="row y-gap-20 pt-20" onSubmit={handleSubmit}>
      <div className="col-12">
        <div className="form-input">
          <input type="text" id="name" 
          name="name"
          value={values.name}
          onChange={handleChange}
          required />
          <label htmlFor="name" className="lh-1 text-16 text-light-1">
            Full Name
          </label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <input type="email" id="email" 
           name="email"
           value={values.email}
           onChange={handleChange}
          required />
          <label htmlFor="email" className="lh-1 text-16 text-light-1">
            Email
          </label>
        </div>
      </div>
      {/* <div className="col-12">
        <div className="form-input">
          <input type="text" id="subject" required />
          <label htmlFor="subject" className="lh-1 text-16 text-light-1">
            Subject
          </label>
        </div>
      </div> */}
      <div className="col-12">
        <div className="form-input">
          <textarea id="message" required rows="4"
          name="message"
          value={values.message}
          onChange={handleChange}
          ></textarea>
          <label htmlFor="message" className="lh-1 text-16 text-light-1">
            Your Message
          </label>
        </div>
      </div>
      <div className="col-auto">
        <button
          type="submit"
          className="button px-24 h-50 -dark-1 bg-blue-1 text-white"
        >
          Send Message <div className="icon-arrow-top-right ml-15"></div>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
