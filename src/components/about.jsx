import React from 'react';
import Javier from '../images/Javier.jpeg';
import Wilfredo from '../images/Wilfredo.jpeg';
import Andrew from '../images/Andrew.jpeg';
import Glisheli from '../images/Glisheli.jpeg';
import Ian from '../images/Ian.jpg';
import '../styles/about.css';
function About() {
  return (
    <div>
      
      <div className="about-container">
          <h1 className="section-title">About Us</h1>
        
          <div className="mission-section">
              <h2>Our Mission</h2>
              <p>At Guerreros Z, our mission is to empower businesses and individuals by creating innovative, user-focused websites and robust databases. We are dedicated to delivering tailored solutions that combine cutting-edge technology, exceptional design, and reliable data management to help our clients thrive in the digital age. By fostering collaboration, creativity, and precision, we aim to build digital experiences that are both functional and inspiring, transforming visions into reality.</p>
              
          </div>
            <div className="team-section">
                <h2>Our Team</h2>
                <div className="team-grid">
                    <div className="team-member">
                        <img src={Javier} alt="Javier Sánchez" class="member-image"/>
                        <h3>Javier Sánchez</h3>
                        <p className="member-role">Chief Fronted Developer</p>
                    </div>
                    <div className="team-member">
                        <img src={Ian} alt="Ian Lee" class="member-image"/>
                        <h3>Ian Lee</h3>
                        <p className="member-role">Hokage</p>
                    </div>
                    <div className="team-member">
                        <img src={Wilfredo} alt="Wilfredo Matute" className="member-image"/>
                        <h3>Wilfredo Matute</h3>
                        <p className="member-role">Vice President</p>
                    </div>
                    <div className="team-member">
                        <img src={Glisheli} alt="Glisheli Guevara" class="member-image"/>
                        <h3>Glisheli Guevara</h3>
                        <p className="member-role">CMO</p>
                    </div>
                    <div className="team-member">
                        <img src={Andrew} alt="Andrew Acosta" class="member-image"/>
                        <h3>Andrew Acosta</h3>
                        <p className="member-role">CEO</p>
                    </div>
                </div>
            </div>
          <div className="contact-section">
              <h2>Contact Us</h2>
              <p>
                Telephone: +1 (555) 123-4567<br />
                E-mail: info@guerrerosz.com<br />
                Address: 123 Main Street, City, Country
              </p>
            
          </div>
      </div>
</div>
  );
}
export default About;