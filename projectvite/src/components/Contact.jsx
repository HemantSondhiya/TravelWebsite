import React from 'react'
import Navbar from '../Travel/Navbar'
import Footer from '../Travel/Footer'

export default function Contact() {
  return (
    <>
    <Navbar/>
    <div>
      <p classNameName='cont1 '>Contact Us</p>
    </div>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Contact Us</title>
    <body>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="contact-form">
                    <h2 class="text-center mb-4">Get in Touch</h2>
                    <form action="https://formspree.io/f/xpwzjleg" method="POST" class="contact">
                        <div class="mb-3">
                            <label for="name" class="form-label">Full Name</label>
                            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email Address</label>
                            <input type="email" name="email" class="form-control" id="email" placeholder="Your Email" required/>
                        </div>
                        <div class="mb-3">
                            <label for="subject" class="form-label">Subject</label>
                            <input type="text" name="subject" class="form-control" id="subject" placeholder="Subject" required/>
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Message</label>
                            <textarea name="message" class="form-control" id="message" rows="5" placeholder="Your Message" required></textarea>
                        </div>
                        <div class="d-grid">
                            <button type="submit" class="btn btn-custom btttn">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>


<div classNameName='space'>  </div>
    <Footer/>
    </>
  )
}
