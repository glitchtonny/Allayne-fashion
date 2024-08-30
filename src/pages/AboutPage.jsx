import React from 'react';
import '../styles/AboutPage.css';  

const AboutPage = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <div className="about-content">
          <h2>Welcome to Allayne, the premier online clothing store.</h2>
          <h3>About us</h3>
          <p>
            Whether you're looking for casual wear, elegant dresses, or chic accessories, Allayne has everything a woman needs to express her individuality and personal style. Our commitment to quality and design means that you can shop with confidence, knowing you're getting the best in contemporary fashion.
          </p>
        </div>
        <div className="about-image">
        </div>
      </section>
      <section className="about-section">
        <div className="about-image">
        </div>
        <div className="about-content">
          <h3>Our Mission</h3>
          <p>
            At Allayne, we believe that fashion is more than just clothing—it's a way to empower women to feel confident and beautiful. We carefully curate our collections to include pieces that are not only trendy but also timeless, ensuring that every purchase is a valuable addition to your wardrobe.
          </p>
        </div>
      </section>
      <section className="about-section">
        <div className="about-content">
          <h3>Our Promise</h3>
          <p>
            We are committed to providing our customers with an exceptional shopping experience. From the quality of our products to our customer service, we strive to exceed expectations and make fashion accessible to everyone. Join us on this journey and discover your new favorite outfit at Allayne.
          </p>
        </div>
        <div className="about-image">
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
