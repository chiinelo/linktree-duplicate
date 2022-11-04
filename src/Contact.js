import React from 'react'
import  "../src/styles/contactPage.css";

const contact = () => {
  return (
    <div className='contact'>

    <div className='landing-page'>
        <h1 className='fs-1 fw-bolder'>Contact Me</h1>
        <p className='fs-4 fw-lighter'>Hi there, contact me to ask me about anything you have in mind.</p>
    </div>

    <form >
        <label>First Name</label> <br />
        <input type="text" placeholder='Enter your first name' id='first_name' className='name-email-input'/>
    </form>
    <form >
        <label>Last Name</label> <br />
        <input type="text" placeholder='Enter your last name' id='last_name' className='name-email-input'/>
    </form>
    <form >
        <label>Email</label> <br />
        <input type="email" placeholder='yourname@email.com' id='email'  className='name-email-input'/>
    </form>
    <form >
        <label>Message</label> <br />
        <textarea type="text" placeholder="Send me a message and I'll reply you as soon s possible" id='message' className='message-input'/>
    </form>
    <label for="vehicle1" className=''>
    <input type="checkbox"/>
   You agree to providing your data to who may contact you.</label>


    <button id='btn__submit' className='message-button mb-3'>Send message</button>
    
          <div className="mt-5">
            <hr></hr>

            <div className="pb-5 pt-0 logo-footer">
              <img src="../images/logo.36d2d48a.svg" alt="" />
              <p>HNG Internship 9 Frontend Task</p>
              <img src="../images/I4G.svg" alt="github-logo" />
            </div>
          </div>
    </div>

  )
}

export default contact

