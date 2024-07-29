import React, { useState } from 'react';
import './Gallery.css';

// Import images
import ramImage1 from '../images/1.JPG';
import ramImage2 from '../images/2.JPG';
import ramImage3 from '../images/3.JPG';
import ramImage4 from '../images/4.JPG';
import ramImage5 from '../images/5.JPG';
import ramImage6 from '../images/6.JPG';
import maaImage1 from '../images/7.JPG';
import maaImage2 from '../images/8.JPG';
import maaImage3 from '../images/9.JPG';
import maaImage4 from '../images/10.JPG';
import maaImage5 from '../images/11.JPG';
// import maaImage6 from '../images/12.JPG';
import maaImage7 from '../images/13.JPG';
import maaImage8 from '../images/14.JPG';
// import ramImage21 from '../images/21.jpg';
// import ramImage22 from '../images/22.jpg';
// import ramImage23 from '../images/23.jpg';
// import ramImage24 from '../images/24.jpg';
// import ramImage25 from '../images/25.jpg';
// import ramImage26 from '../images/26.jpg';
import ramImage27 from '../images/27.jpg';
import ramImage28 from '../images/28.jpg';
import ramImage29 from '../images/29.jpg';
import ramImage30 from '../images/30.jpg';
import ramImage31 from '../images/31.jpg';
import ramImage32 from '../images/32.jpg';
import ramImage33 from '../images/33.jpg';


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: ramImage1, alt: "Ram Vivah Bhawan 1", details: "Detail about Ram Vivah Bhawan 1" },
    { src: ramImage2, alt: "Ram Vivah Bhawan 2", details: "Detail about Ram Vivah Bhawan 2" },
    { src: ramImage3, alt: "Ram Vivah Bhawan 3", details: "Detail about Ram Vivah Bhawan 3" },
    { src: ramImage4, alt: "Ram Vivah Bhawan 4", details: "Detail about Ram Vivah Bhawan 4" },
    { src: ramImage5, alt: "Ram Vivah Bhawan 5", details: "Detail about Ram Vivah Bhawan 5" },
    { src: ramImage6, alt: "Ram Vivah Bhawan 6", details: "Detail about Ram Vivah Bhawan 6" },
    { src: maaImage1, alt: "Maa Gauri Vivah Bhawan 1", details: "Detail about Maa Gauri Vivah Bhawan 1" },
    { src: maaImage2, alt: "Maa Gauri Vivah Bhawan 2", details: "Detail about Maa Gauri Vivah Bhawan 2" },
    { src: maaImage3, alt: "Maa Gauri Vivah Bhawan 3", details: "Detail about Maa Gauri Vivah Bhawan 3" },
    { src: maaImage4, alt: "Maa Gauri Vivah Bhawan 4", details: "Detail about Maa Gauri Vivah Bhawan 4" },
    { src: maaImage5, alt: "Maa Gauri Vivah Bhawan 4", details: "Detail about Maa Gauri Vivah Bhawan 4" },
    // { src: maaImage6, alt: "Maa Gauri Vivah Bhawan 4", details: "Detail about Maa Gauri Vivah Bhawan 4" },
    { src: maaImage7, alt: "Maa Gauri Vivah Bhawan 4", details: "Detail about Maa Gauri Vivah Bhawan 4" },
    { src: maaImage8, alt: "Maa Gauri Vivah Bhawan 4", details: "Detail about Maa Gauri Vivah Bhawan 4" },
    // { src: ramImage21, alt: "Ram Vivah Bhawan 1", details: "Detail about Ram Vivah Bhawan 1" },
    // { src: ramImage22, alt: "Ram Vivah Bhawan 2", details: "Detail about Ram Vivah Bhawan 2" },
    // { src: ramImage23, alt: "Ram Vivah Bhawan 3", details: "Detail about Ram Vivah Bhawan 3" },
    // { src: ramImage24, alt: "Ram Vivah Bhawan 4", details: "Detail about Ram Vivah Bhawan 4" },
    // { src: ramImage25, alt: "Ram Vivah Bhawan 5", details: "Detail about Ram Vivah Bhawan 5" },
    // { src: ramImage26, alt: "Ram Vivah Bhawan 6", details: "Detail about Ram Vivah Bhawan 6" },
    { src: ramImage27, alt: "Ram Vivah Bhawan 1", details: "Detail about Ram Vivah Bhawan 1" },
    { src: ramImage28, alt: "Ram Vivah Bhawan 2", details: "Detail about Ram Vivah Bhawan 2" },
    { src: ramImage29, alt: "Ram Vivah Bhawan 3", details: "Detail about Ram Vivah Bhawan 3" },
    { src: ramImage30, alt: "Ram Vivah Bhawan 4", details: "Detail about Ram Vivah Bhawan 4" },
    { src: ramImage31, alt: "Ram Vivah Bhawan 5", details: "Detail about Ram Vivah Bhawan 5" },
    { src: ramImage32, alt: "Ram Vivah Bhawan 6", details: "Detail about Ram Vivah Bhawan 6" },
    { src: ramImage33, alt: "Ram Vivah Bhawan 6", details: "Detail about Ram Vivah Bhawan 6" },
  ];


  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="section">
        <h2>Ram Vivah Bhawan</h2>
        <div className="images">
          {images.slice(13).map((image, index) => (
            <div key={index} className="image-container" onClick={() => setSelectedImage(image)}>
              <img src={image.src} alt={image.alt} />
              <p>{image.details}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="section">
        <h2>Maa Gauri Vivah Bhawan</h2>
        <div className="images">
          {images.slice(0,13).map((image, index) => (
            <div key={index} className="image-container" onClick={() => setSelectedImage(image)}>
              <img src={image.src} alt={image.alt} />
              <p>{image.details}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage.src} alt={selectedImage.alt} />
          <div className="caption">{selectedImage.details}</div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
