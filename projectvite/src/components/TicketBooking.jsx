import React, { useState } from 'react';
import './TicketBooking.css'; // Import CSS for styling
import Navbar from '../Travel/Navbar';
import Footer from '../Travel/Footer';

// Tour package data
const tourPackages =  [
    
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
const TicketBooking = () => {
  const [selectedPackage, setSelectedPackage] = useState(tourPackages[0]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    numOfTickets: 1,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle package selection
  const handlePackageChange = (e) => {
    const packageId = parseInt(e.target.value);
    const selected = tourPackages.find(pkg => pkg.id === packageId);
    setSelectedPackage(selected);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500); // Simulate form submission delay
  };

  if (isSubmitted) {
    return (
      <div className="booking-success">
        <h2>Booking Successful!</h2>
        <p>Thank you, {formData.name}! Your booking for the "{selectedPackage.title}" tour package has been confirmed.</p>
      </div>
    );
  }

  return (
   <div className='heropadd'>
    <Navbar/>
    <div className="ticket-booking">
      <h2>Book Your Tour Package</h2>

      {/* Tour package selection */}
      <div className="tour-selection">
        <label htmlFor="tour-package">Choose a Tour Package:</label>
        <select
          id="tour-package"
          onChange={handlePackageChange}
          value={selectedPackage?.id || ''}
        >
          {tourPackages.map((pkg) => (
            <option key={pkg.id} value={pkg.id}>
              {pkg.title}
            </option>
          ))}
        </select>
      </div>

      {/* Package details */}
      <div className="package-details">
        <img src={selectedPackage?.image} alt={selectedPackage?.title} className="package-image" />
        <div className="package-info">
          <h3>{selectedPackage?.title}</h3>
          <p>{selectedPackage?.description}</p>
          <p><strong>Price:</strong> {selectedPackage?.price}</p>
        </div>
      </div>

      {/* Booking form */}
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="numOfTickets">Number of Tickets</label>
          <input
            type="number"
            id="numOfTickets"
            name="numOfTickets"
            value={formData.numOfTickets}
            onChange={handleChange}
            min="1"
            required
          />
        </div>
        <button type="submit" className="cta-button" disabled={loading}>
          {loading ? 'Booking...' : 'Book Now'}
        </button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default TicketBooking;
