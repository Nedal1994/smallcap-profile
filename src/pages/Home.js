import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Small Cap Token</h1>
          <p>Your go-to platform for token analysis</p>
          <button className="cta">Get Started</button>
        </div>
      </section>
      <section className="info-section">
        <h2>About Our Platform</h2>
        <p>We provide in-depth analysis of small cap tokens to help you make informed decisions.</p>
        <button className="cta">Learn More</button>
      </section>
      <section className="features-section">
        <h2>Features</h2>
        <p>Explore the key features of our platform.</p>
        <div className="features">
          <div className="feature">Feature 1</div>
          <div className="feature">Feature 2</div>
          <div className="feature">Feature 3</div>
        </div>
      </section>
      <section className="stats-section">
        <h2>Statistics</h2>
        <div className="stats">
          <div className="stat">Chart 1</div>
          <div className="stat">Chart 2</div>
          <div className="stat">Chart 3</div>
        </div>
      </section>
      <section className="video-section">
        <h2>Watch Our Introduction Video</h2>
        <video controls>
          <source src="path/to/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials">
          <div className="testimonial">"Great platform!" - User A</div>
          <div className="testimonial">"Very insightful." - User B</div>
          <div className="testimonial">"Helped me a lot." - User C</div>
        </div>
      </section>
      <section className="subscription">
        <h2>Subscribe to Our Newsletter</h2>
        <form>
          <input type="email" placeholder="Your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
