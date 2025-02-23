import { Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';

export const ProjectCard = ({ id, title, description, imgUrl, onReadMore }) => {
  function handleClick() {
    onReadMore(id);
  }

  return (
    <Col size={12} sm={6} md={4}>
      <TrackVisibility once>
        {({ isVisible }) => (
          <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
            <div className="proj-imgbx">
              <img src={imgUrl} alt="projectImg" />
              <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
                <button onClick={handleClick}>Read more</button>
              </div>
            </div>
          </div>
        )}
      </TrackVisibility>
    </Col>
  );
};
