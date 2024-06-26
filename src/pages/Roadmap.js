import React from 'react';
import './Roadmap.css';
import roadmapBanner from '../assets/images/roadmap.jpg'; // Update the path as necessary

const Roadmap = () => {
  return (
    <><div className="hero-banner-roadmap">
      <h1>Roadmap</h1>
    </div><div className="roadmap-container">
        {/*</div><div className="hero-banner-roadmap" style={{ backgroundImage: `url(${roadmapBanner})` }}>
    */}
        <div className="legend">
          <span><i className="icon sdk"></i> SmallToken SDK</span>
          <span><i className="icon network"></i> SmallToken Network</span>
          <span><i className="icon projects"></i> SmallToken Projects</span>
          <span><i className="icon other"></i> Other</span>
        </div>
        <div className="timeline">
          <div className="timeline-event">
            <h3>Now</h3>
            <ul>
              <li><i className="icon sdk"></i> SmallCapToken Registration</li>
              <li><i className="icon network"></i> Team Recruitment</li>
              <li><i className="icon projects"></i> Social Media Creation</li>
              <li><i className="icon other"></i> Landing Page Development</li>
            </ul>
          </div>
          <div className="timeline-event">
            <h3>Q3 2024</h3>
            <ul>
              <li><i className="icon sdk"></i> White Paper Publication</li>
              <li><i className="icon network"></i> Website Launch</li>
              <li><i className="icon projects"></i> Social Media Activities</li>
              <li><i className="icon other"></i> Dapp Development for SmallCapToken</li>
              <li><i className="icon projects"></i> Community Growth</li>
            </ul>
          </div>
          <div className="timeline-event">
            <h3>Q4 2024</h3>
            <ul>
              <li><i className="icon sdk"></i> Dapp Launch on Testnet</li>
              <li><i className="icon network"></i> Strategic Partnerships</li>
              <li><i className="icon projects"></i> SmallCapToken Demo Development</li>
              <li><i className="icon other"></i> SmallCapToken Demo Deployment</li>
              <li><i className="icon projects"></i> Token Contract Creation</li>
              <li><i className="icon projects"></i> NFT's Development for SmallCapToken</li>
            </ul>
          </div>
          <div className="timeline-event">
            <h3>Q1 2025</h3>
            <ul>
              <li><i className="icon sdk"></i> SmallCapToken 3D Modeling</li>
              <li><i className="icon network"></i> Small CapToken Development</li>
              <li><i className="icon projects"></i> MVP Launch</li>
              <li><i className="icon other"></i> Token Sale</li>
            </ul>
          </div>
          <div className="timeline-event">
            <h3>Q2 2025</h3>
            <ul>
              <li><i className="icon sdk"></i> Marketplace Launch</li>
              <li><i className="icon network"></i> Marketing Activities</li>
              <li><i className="icon projects"></i> More CEX Listing of Token</li>
            </ul>
          </div>
        </div>
      </div></>
  );
};

export default Roadmap;
