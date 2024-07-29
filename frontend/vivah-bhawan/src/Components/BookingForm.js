import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    venue: '',
    eventType: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/bookings', formData);
      toast.success('Booking confirmed');
    } catch (error) {
      toast.error('Error processing booking');
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      <input type="text" name="venue" value={formData.venue} onChange={handleChange} placeholder="Venue" required />
      <input type="text" name="eventType" value={formData.eventType} onChange={handleChange} placeholder="Event Type" required />
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
