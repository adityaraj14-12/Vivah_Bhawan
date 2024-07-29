import React from 'react';
import './Venue.css';

const Venue = () => (
  <div className="venue">
    <h1>Our Venues</h1>
    <div className="venue-details">
      <div className="venue-card">
        <h2>Ram Vivah Bhawan</h2>
        <p>Ram Vivah Bhawan in Bhagalpur is a charming banquet hall perfect for various celebrations like birthdays, weddings, or corporate events. The hall is elegantly designed, creating a delightful ambiance for your special occasions. Situated conveniently in Bhagalpur HO, it offers more than just event space and holds a service rating of 3.6. For a lovely and well-connected venue, consider reaching out to Ram Vivah Bhawan to make your event truly memorable.</p>
        <p><strong>Location:</strong>  Laluchak-Angari Shashtri Nagar, Ishakchak, Bhagalpur, Bihar 812002</p>
        <p><strong>Distance from Bhagalpur Railway Station:</strong> 1.8 km</p>
        <p><strong>Rating:</strong> 3.6</p>
        <iframe
          title="Ram Vivah Bhawan Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4682.475571355987!2d86.98384460282146!3d25.240870785370433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f049f0f4fa23a9%3A0x29e951178675c273!2sRam%20Vivah%20Bhawan!5e0!3m2!1sen!2sin!4v1722099491427!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <p><a href="https://www.google.com/maps/dir/?api=1&destination=Ram+Vivah+Bhawan,+Bhagalpur+HO" target="_blank" rel="noopener noreferrer">Get Directions</a></p>
      </div>
      <div className="venue-card">
        <h2>Maa Gauri Vivah Bhawan</h2>
        <p>Maa Gauri Vivah Bhawan in Bhagalpur, Bihar, is a stunning wedding venue with a stellar 4.20 out of 5-star rating. Located at Mishra Tola, Laluchak, Angari, Bhagalpur, Bihar 812001, India, it's about 2.89 kilometers from Bhagalpur Railway Station. This venue provides all you need for a perfect wedding, boasting beautiful surroundings and excellent services to ensure your special day is unforgettable.</p>
        <p><strong>Location:</strong> Mishra Tola, Laluchak, Angari, Bhagalpur, Bihar 812001</p>
        <p><strong>Distance from Bhagalpur Railway Station:</strong> 2.89 km</p>
        <p><strong>Rating:</strong> 4.20</p>
        <iframe
          title="Maa Gauri Vivah Bhawan Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5042.3056251038115!2d86.98762953504614!3d25.238236333989388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f049c56269bd2f%3A0x3394d58ae0d2c07d!2sMaa%20Gauri%20Vivah%20Bhawan!5e0!3m2!1sen!2sin!4v1722099615066!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <p><a href="https://www.google.com/maps/dir/?api=1&destination=Maa+Gauri+Vivah+Bhawan,+Mishra+Tola,+Laluchak,+Angari,+Bhagalpur,+Bihar+812001" target="_blank" rel="noopener noreferrer">Get Directions</a></p>
      </div>
    </div>
  </div>
);

export default Venue;
