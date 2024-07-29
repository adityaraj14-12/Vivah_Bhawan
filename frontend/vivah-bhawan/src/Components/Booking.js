import React, { useState, useEffect } from 'react';
import './Booking.css';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        venue: '',
        startDate: '',
        endDate: '',
        phoneNumber: '',
        purpose: ''
    });

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setFormData(prevData => ({
            ...prevData,
            startDate: today,
            endDate: today
        }));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
        if (name === 'startDate') {
            setFormData(prevData => ({
                ...prevData,
                endDate: value > prevData.endDate ? value : prevData.endDate
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="page-container">
            <header className="header">
                <h1>Booking Request Form</h1>
            </header>
            <div className="form-container">
                <form onSubmit={handleSubmit} className="booking-form">
                    <div className="form-group">
                        <label htmlFor="venue">Venue:</label>
                        <select
                            id="venue"
                            name="venue"
                            value={formData.venue}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a venue</option>
                            <option value="ram_vivah_bhawan">Ram Vivah Bhawan</option>
                            <option value="maa_gauri_vivah_bhawan">Maa Gauri Vivah Bhawan</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="startDate">Start Date:</label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="endDate">End Date:</label>
                        <input
                            type="date"
                            id="endDate"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleChange}
                            min={formData.startDate}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            pattern="[0-9]{10}"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="purpose">Purpose:</label>
                        <select
                            id="purpose"
                            name="purpose"
                            value={formData.purpose}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select purpose</option>
                            <option value="wedding_ceremony">Wedding Ceremony</option>
                            {/* Add more options here if needed */}
                        </select>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="submit-button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;
