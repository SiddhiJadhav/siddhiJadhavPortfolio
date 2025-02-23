import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import toast from 'react-hot-toast';

export const Contact = () => {
  const [buttonText, setButtonText] = useState('Send');

  const form = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    debugger;
    setButtonText('Sending...');

    emailjs
      .sendForm('service_zvqmgav', 'template_m32kfq5', form.current, {
        publicKey: 'LQvkq1GjQoymyGQ9C',
      })
      .then(
        () => {
          toast.success('Message sent successfully', {
            duration: 5000,
          });
          setButtonText('Send');
        },
        error => {
          toast.error('Something went wrong, please try again later.', {
            duration: 5000,
          });

          setButtonText('Send');
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility once>
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
          <Col size={12} md={6}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2 className="header-underline">Get In Touch</h2>
                  <form ref={form} onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="first_name"
                          //value={formDetails.firstName}
                          placeholder="First Name"
                          // onChange={e =>
                          //onFormUpdate('firstName', e.target.value)
                          // }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="last_name"
                          // value={formDetails.lasttName}
                          placeholder="Last Name"
                          // onChange={e =>
                          //   onFormUpdate('lastName', e.target.value)
                          // }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          name="email"
                          //value={formDetails.email}
                          placeholder="Email Address"
                          // onChange={e => onFormUpdate('email', e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          name="phone_no"
                          // value={formDetails.phone}
                          placeholder="Phone No."
                          // onChange={e => onFormUpdate('phone', e.target.value)}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          name="message"
                          // value={formDetails.message}
                          placeholder="Message"
                          // onChange={e =>
                          //   onFormUpdate('message', e.target.value)
                          // }
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
