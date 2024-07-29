import React from 'react';
import './Home.css';
import ramVivahImage from '../ram.jpg'; // Make sure the path is correct
import maaGauriImage from '../maa.jpg'; // Make sure the path is correct

const HomePage = () => (
  <div className="home-page">
    <div className="welcome-text">
      <h1>Welcome to Ram Vivah Bhawan and Maa Gauri Vivah Bhawan</h1>
    </div>
    <div className="content">
      <section className="venue-section">
        <div className="venue-content">
          <img src={ramVivahImage} alt="Ram Vivah Bhawan" className="venue-image" />
          <div className="venue-text">
            <h2>Ram Vivah Bhawan</h2>
            <p>
              Welcome to Ram Vivah Bhawan, your premier choice for a wedding venue in Bhagalpur. Our spacious and elegantly designed banquet halls are perfect for hosting a variety of events, including weddings, anniversary celebrations, corporate events, birthday parties, and more. With multiple large halls, ample parking space, and beautifully decorated rooms, we ensure your special occasion is nothing short of spectacular.
            </p>
            <h3>Why Choose Ram Vivah Bhawan?</h3>
            <ul>
              <li><strong>Elegant and Spacious:</strong> Our venue features 2-3 large halls, capable of accommodating events for 100 to 1000 guests. Each hall is meticulously decorated to provide an enchanting atmosphere for your celebration.</li>
              <li><strong>Comprehensive Facilities:</strong> We offer a wide range of amenities including 9-10 well-appointed rooms, 6-7 toilets and bathrooms, 5-7 storage rooms, and a large parking area. Every detail is designed to ensure your comfort and convenience.</li>
              <li><strong>Event Planning and Services:</strong> From DJ lights and generators to utensils and customized decorations, we provide everything you need to make your event unforgettable. Our dedicated team is here to assist you with planning and executing your event to perfection.</li>
              <li><strong>Prime Location:</strong> Conveniently situated in Bhagalpur HO, Bhagalpur, Ram Vivah Bhawan is easily accessible and well-connected, making it an ideal choice for your guests.</li>
            </ul>
            <p>
              With a service rating of 3.6, Ram Vivah Bhawan is committed to delivering exceptional service and creating memorable experiences for all your special occasions. Contact us today to book our venue and let us help you make your event truly memorable.
            </p>
          </div>
        </div>
      </section>
      <section className="venue-section">
        <div className="venue-content">
          <img src={maaGauriImage} alt="Maa Gauri Vivah Bhawan" className="venue-image" />
          <div className="venue-text">
            <h2>Maa Gauri Vivah Bhawan</h2>
            <p>
              Welcome to Maa Gauri Vivah Bhawan, a premier wedding venue nestled in the heart of Bhagalpur, Bihar. With a stellar 4.40-star rating, our venue is renowned for its exceptional service and enchanting ambiance, making it the perfect setting for your special day.
            </p>
            <h3>Why Choose Maa Gauri Vivah Bhawan?</h3>
            <ul>
              <li><strong>Exquisite Facilities:</strong> Our venue features a grand hall and an open top area, ideal for hosting both intimate gatherings and large celebrations. With a capacity to comfortably accommodate 100 to 1000 guests, Maa Gauri Vivah Bhawan is perfect for weddings, anniversaries, corporate events, and more.</li>
              <li><strong>Comfort and Convenience:</strong> Enjoy the convenience of 13 well-appointed rooms, 4 modern bathrooms, and a spacious kitchen equipped for your catering needs. Our large parking area ensures ample space for your guests.</li>
              <li><strong>Elegance and Style:</strong> The venue is beautifully decorated with elegant touches, and we provide all the essentials you need, including utensils, DJ lights, and generators. Our dedicated team is here to assist with planning and execution, ensuring every detail is perfectly tailored to your vision.</li>
              <li><strong>Prime Location:</strong> Conveniently located at Mishra Tola, Laluchak, Angari, Bhagalpur, just 2.89 kilometers from Khutha railway station, Maa Gauri Vivah Bhawan is easily accessible and well-connected.</li>
            </ul>
            <p>
              Whether you're planning a grand wedding, a memorable anniversary celebration, or a vibrant event, Maa Gauri Vivah Bhawan offers a stunning setting and exceptional services to make your occasion truly unforgettable. Contact us today to start planning your perfect event!
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default HomePage;
