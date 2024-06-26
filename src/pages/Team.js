import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <div className="team-page">
      <div className="hero-banner">
        <h1>Meet Our Team</h1>
        <p>Get to know the talented individuals driving our project forward.</p>
      </div>
      <div className="team-container">
        <div className="team-members">
          {teamData.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.image} alt={member.name} />
              <h2>{member.name}</h2>
              <p>{member.role}</p>
              <p>{member.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const teamData = [
  {
    name: 'John Doe',
    role: 'CEO & Co-Founder',
    email: 'john.doe@example.com',
    image: '../assets/images/teamprofile.png',
  },
  // Add more team members here
  {
    name: 'John Doe',
    role: 'CEO & Co-Founder',
    email: 'john.doe@example.com',
    image: '../assets/images/teamprofile.png',
  },
  {
    name: 'John Doe',
    role: 'CEO & Co-Founder',
    email: 'john.doe@example.com',
    image: '../assets/images/teamprofile.png',
  },
  {
    name: 'John Doe',
    role: 'CEO & Co-Founder',
    email: 'john.doe@example.com',
    image: '../assets/images/teamprofile.png',
  },
  {
    name: 'John Doe',
    role: 'CEO & Co-Founder',
    email: 'john.doe@example.com',
    image: '../assets/images/teamprofile.png',
  },
  {
    name: 'John Doe',
    role: 'CEO & Co-Founder',
    email: 'john.doe@example.com',
    image: '../assets/images/teamprofile.png',
  },
  {
    name: 'John Doe',
    role: 'CEO & Co-Founder',
    email: 'john.doe@example.com',
    image: '../assets/images/teamprofile.png',
  },
  {
    name: 'John Doe',
    role: 'CEO & Co-Founder',
    email: 'john.doe@example.com',
    image: '../assets/images/teamprofile.png',
  },
  {
    name: 'John Doe',
    role: 'CEO & Co-Founder',
    email: 'john.doe@example.com',
    image: '../assets/images/teamprofile.png',
  },
];

export default Team;
