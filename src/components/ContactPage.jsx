import React from 'react'
import "./ContactPage.css"
import { MdMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { PiSmileyWinkFill } from "react-icons/pi";
import Swal from 'sweetalert2'



const ContactPage = ({ isDarkMode }) => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "58f566a7-e5d6-47cf-8f21-d73ff884723f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Succes!",
        text: "Your Message sent succesfully",
        icon: "success"
      });
      event.target.reset();
    }
  };

  return (
    <div className={`container-contactPage ${isDarkMode ? 'dark-mode' : ''}`}>
        <div className="left-contact">
            <div className="title-contact">
            <h5>Let's Work <br></br>Together <PiSmileyWinkFill className='Pi'/></h5>
            </div>
            <div className="detail-contact">
            <h5><MdMailOutline className='Md'/> berke35.5@hotmail.com</h5>
            <h5><FaLocationDot className='Fa'/> Turkey , Izmir</h5>
            </div>
        </div>
        <div className="right-contact">
          <form onSubmit={onSubmit}>
          <input type="text" className="first-name" placeholder='Full Name' name="name" required></input>
          <input type="email" className="email" placeholder='Your Email' name="email" required></input>
          <textarea className="message" name="message" placeholder='Your Message' rows="5" required></textarea>
          <a href="#"><button className="form-btn">Submit</button></a>
          </form>
        </div>
    </div>
  )
}

export default ContactPage
