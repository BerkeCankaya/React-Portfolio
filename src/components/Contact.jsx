import React from 'react'
import '../components/Contact.css'
import { IoMdContacts } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='contact-container'>
       <div className="contact">
            <h1>Let's Talk</h1>
            <h2>Looking to create something awesome? <span className='h2-spn'>Or have a question? Drop me an email.</span></h2>
            <Link to="/contact"><button>Contact Me<FaArrowRight /></button></Link>
        </div>
        <div className="contact-ikon">
        <IoMdContacts className='icon'/>
        </div>
    </div>
  )
}

export default Contact
