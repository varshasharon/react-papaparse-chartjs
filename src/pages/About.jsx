import React from 'react';
import img from "../assets/img.jpg";
import Accordion from 'react-bootstrap/Accordion';

const About = () => {
  return (
    <>
      <div className="con">
        <div className="detail">
          <div className="section">
            <h1>Healthlytic</h1>
            <p className="subtitle">Empowering Healthcare with Smart Analytics</p>

            <div className="div2">
              <div>
                <p>
                  Welcome to <b>Healthlytic</b> – your all-in-one smart healthcare companion!  
                  We simplify medical data management, enhance patient care, and provide insightful analytics to improve healthcare efficiency.
                </p>

                {/* Why Choose Us? */}
                <h5 className="title">Why Choose Us?</h5>
                <ul>
                  <li><b> Save Time:</b> No more sifting through endless paperwork – access and manage patient data instantly.</li>
                  <li><b>Make Data Make Sense:</b> Stunning visualizations transform raw numbers into meaningful insights.</li>
                  <li><b>Stay Organized:</b> Our structured, intuitive dashboard keeps everything at your fingertips.</li>
                  <li><b>Privacy First:</b> Patient data is encrypted, ensuring top-tier security and confidentiality.</li>
                  <li><b>Seamless Integration:</b> Our platform is compatible with existing hospital management systems.</li>
                </ul>
              </div>
              <div>
                <img src={img} alt="Healthlytic Overview" />
              </div>
            </div>

            {/* What We Offer */}
            <h5 className="title">What We Offer</h5>
            <Accordion defaultActiveKey="0" className="acc">

              <Accordion.Item eventKey="0">
                <Accordion.Header>📁 Patient Data Management</Accordion.Header>
                <Accordion.Body>
                  Easily manage patient records, including medical history, prescriptions, diagnoses, and treatment plans.  
                  Our secure system ensures quick access while maintaining strict patient confidentiality.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>📊 Advanced Data Analytics</Accordion.Header>
                <Accordion.Body>
                  Generate data insights from patient csv data with chart visualizations.  
                  Identify trends, predict risks, and improve decision-making for better healthcare outcomes.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>📤 CSV Export & Data Sharing</Accordion.Header>
                <Accordion.Body>
                  Effortlessly export patient records for documentation, research, or integration with other hospital systems.  
                  Our structured data format supports bulk downloads and custom filtering.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>🖥️ User-Friendly Interface</Accordion.Header>
                <Accordion.Body>
                  Navigate effortlessly with our intuitive and responsive dashboard.  
                  Designed for healthcare professionals, our interface ensures accessibility across all devices – desktops, tablets, and mobiles.
                </Accordion.Body>
              </Accordion.Item>


            </Accordion>

            
            <div className="cta-section">
              <p>Need more details? Get in touch with our team today!</p>
              <button className="b"><a href="#">Contact Us</a></button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default About;
