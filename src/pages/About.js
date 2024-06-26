import React from 'react';
import './About.css';
import aboutImage from '../assets/images/about.png'; // Example image

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="about-hero-content">
           <h1>About Us</h1>
            {/*<p>------</p>*/}
        </div>
      </section>
      <section className="about-use-cases">

        <div className="use-cases">
          <div className="use-case">
            <h2>Our Mission</h2>
            <p>Our mission is to deliver advanced, AI-driven insights and risk assessments for small-cap tokens.
               We aim to enhance market transparency by providing detailed token profiles, thereby supporting investors in navigating the complexities of the cryptocurrency landscape with confidence.</p>
          </div>
          <div className="use-case">
            <h2>Our Vision</h2>
            <p>Our vision is to be the leading platform in the cryptocurrency market, 
              providing comprehensive and reliable analysis of small-cap tokens, to foster 
              transparency and innovation in the blockchain ecosystem,
              empowering investors to make informed decisions and drive sustainable growth. 
              </p>
          </div>
          {/* Add more use cases as needed */}
        </div>
      </section>
      {/*<section className="about-mission">
        <h2>Our Mission</h2>
        <p>Smallcap.ai aims to empower investors with unparalleled, data-driven insights into small-cap crypto 
tokens through advanced AI technologies and human expertise. The platform will provide detailed token 
profiles, AI-driven risk assessments, market sentiment analysis, price predictions, and automated email 
reports, all presented via an intuitive web interface.</p>
      </section>
      <section className="about-vision">
        <h2>Our Vision</h2>
        <p>We envision a world where cryptocurrency investments are accessible, transparent, and beneficial for everyone.</p>
      </section>
      <section className="about-team">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="path/to/team-member1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="path/to/team-member2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
          {/* Add more team members as needed 
        </div>
      </section>*/}
      <section className="about-use-cases">
        <h1>Use Cases</h1>
        <p>Explore the practical applications of our platform in the crypto world.</p>
        <div className="use-cases">
          <div className="use-case">
            <h2>Investment Analysis</h2>
            <p>Providing detailed analysis to help investors make informed decisions.</p>
          </div>
          <div className="use-case">
            <h2>Market Insights</h2>
            <p>Offering insights into market trends and token performance.</p>
          </div>
          {/* Add more use cases as needed */}
        </div>
      </section>
      <section className="about-gallery">
        <h1>Gallery</h1>
        <img src={aboutImage} alt="About Us" />
      </section>
      <section className="about-video">
        <h1>Watch Our Introduction Video</h1>
        <video controls>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/p3w5N57zjfQ?si=26qQDMF3drioIYeI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          Your browser does not support the video tag.
        </video>
      </section>
    </div>
  );
};

export default About;
