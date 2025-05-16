import React from "react";
import { Link } from "react-router-dom";



const HeroSection = () => {
  const tourPackages = [
    
      {
        "id": 1,
        "title": "Beach Paradise",
        "description": "Enjoy relaxing days on pristine beaches with luxurious resorts.",
        "image": "https://i.ytimg.com/vi/u8vgfFvTcIE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCLSBi9nyxXOQoqaLCwuFWE0uo-fA",
        "price": "10,000/-Rs",
      
      },
      {
        "id": 2,
        "title": "Mountain Adventure",
        "description": "Hike through towering peaks and explore the rugged mountains.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo3o8NLJW13ArmuCfuAmLADpTtI0qZhja53A&s",
        "price": "10,000/-Rs",
       
      },
    {
        "id": 3,
        "title": "City Explorer",
        "description": "Dive into the vibrant culture and rich history of the world's greatest cities.",
        "image": "https://c1.wallpaperflare.com/preview/146/987/717/architecture-old-travel-city-sky-tourism.jpg",
        "price": "10,000/-Rs"
  }
      ];
      
  return (
    <div className="heropadd">
    <div className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay">
          <h1 className="hero-title">Explore the World</h1>
          <p className="hero-subtitle">
            Discover amazing destinations with our curated travel packages.
          </p>
          <button className="hero-button about"><Link to="/Ticket">Start Your Journey</Link></button>
        </div>
      </div>
      <div className="packages-section heroimgg">
        <h2>Featured Packages</h2>
        <div className="packages-grid">
          {tourPackages.map((pkg, index) => (
            <div className="package-card" key={index}>
              <h3>{pkg.title}</h3>
              <img src={pkg.image} alt="" />
              <p>{pkg.description}</p>
              <p>{pkg.location}</p>
              <p className="price">{pkg.price}</p>
              <button type="button" class="btn btn-info about"><Link to="/ticket">Book Now</Link></button>
            </div>
          ))}
        </div>
      </div>
    </div>
    <section id="packages" className="packages">
        <div className="package">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPx2va6sYoIDbT0gSHApbgGHiXT_rcrS0-2g&s" alt="Beach" />
          <h3>Himachal Paradise</h3>
          <p>Relax in the sun and enjoy the beach resorts.</p>
          <button type="button" class="btn btn-info about"><Link to="/ticket">Book Now</Link></button>
        </div>
        <div className="package">
          <img src="https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGltYWNoYWwlMjBwcmFkZXNofGVufDB8fDB8fHww" alt="Mountains" />
          <h3>Mountain Adventure</h3>
          <p>Experience the thrill of mountain hiking and breathtaking views.</p>
          <button type="button" class="btn btn-info about"><Link to="/ticket">Book Now</Link></button>
        </div>
        <div className="package">
          <img src="https://wallpaperaccess.com/full/211126.jpg" alt="City Tour" />
          <h3>City Explorer</h3>
          <p>Discover the culture and history of vibrant cities.</p>
         <button type="button" class="btn btn-info about"><Link to="/ticket">Book Now</Link></button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
