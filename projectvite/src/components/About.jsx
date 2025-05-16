import React from 'react'
import Footer from '../Travel/Footer'
import Navbar from '../Travel/Navbar'
export default function About() {
  return (
    <>
    <Navbar/>
    <div>
       <p className='apage1 paddingg'>About Us</p> 
    </div>
    <div  className='photo1'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PcoGOo3G9TEMg0ybQdqJFsegNFNJtglWdg&s" class="img-thumbnail" alt="..."/>
    </div>
    <div className='atext1'>
      <p>Welcome to [Your Travel Page Name], your ultimate destination for exploring the world!

We are passionate travelers dedicated to helping you discover the beauty, culture, and adventure our planet has to offer. Whether you're a seasoned globetrotter or just starting your journey, our mission is to inspire, guide, and empower you to create unforgettable travel experiences.

At [Your Travel Page Name], you'll find:

Expert Tips: Practical advice for planning your trips, from budgeting to itineraries.
Inspiring Destinations: Explore hidden gems, iconic landmarks, and off-the-beaten-path adventures.
Travel Stories: Real experiences from fellow travelers to spark your wanderlust.
Sustainable Travel: Insights on how to travel responsibly and leave a positive impact on the places you visit.
We believe in the transformative power of travel to connect people, broaden perspectives, and create lifelong memories. Our goal is to make your journey as seamless and exciting as possible.

Join our community of explorers and let us be your guide to the extraordinary!

Happy travels,
The [Your Travel Page Name] Team</p>
    </div>
    <Footer/>
    </>
    
  )
}
