import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const About = () => {
  const [status, setStatus] = useState({});

  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <div className="heading">
            <h2  className="header-underline">About me</h2>
            <h3>
              I'm <span>Siddhi Jadhav</span>, Passionate web developer.
            </h3>
            <p>
              MERN Stack Developer with 4 years of experience in designing,
              developing, and maintaining applications for banking sector.
              <br></br>
              Demonstrating consistent excellence in delivering customer focused
              solutions.<br></br> Skilled in modern JavaScript frameworks.
            </p>
          </div>
          {/* <Col size={12} md={4}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={8}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Get In Touch</h2>
                </div>
              )}
            </TrackVisibility>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};
