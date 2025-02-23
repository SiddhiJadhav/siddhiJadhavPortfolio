import { Col, Container, Row } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';

export const ProjectDesc = ({
  title,
  description,
  tech,
  liveSite,
  liveUrl,
  fullDesc,
  onCloseDesc,
}) => {
  return (
    <Container>
      <TrackVisibility once>
        {({ isVisible }) => (
          <div className={'animate__animated animate__zoomIn'}>
            <Row className="align-items-center projDesc">
              <div className="heading ">
                <h2>{title}</h2>
                <h4>{description}</h4>

                <h4>Technologies Used - {tech}</h4>

                <p>{fullDesc}</p>
                <div className="closeButtonDiv">
                  {liveSite && (
                    <button className="closeButton">
                      <a href={liveUrl} target="_blank" rel="noreferrer">
                        Live site
                      </a>
                    </button>
                  )}
                  <button className="closeButton" onClick={onCloseDesc}>
                    Close
                  </button>
                </div>
              </div>
            </Row>
          </div>
        )}
      </TrackVisibility>
    </Container>
  );
};
