import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/moneyManager.jpg';
import projImg2 from '../assets/img/ehr.png';
import projImg3 from '../assets/img/project-img3.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState } from 'react';
import { ProjectDesc } from './ProjectDesc';

export const Projects = () => {
  const [showDesc, setShowDesc] = useState(false);
  const [selectedProj, setSelectedProj] = useState({});

  const projects = [
    {
      id: 1,
      title: 'Money Manager',
      description: 'Personal Finance Tracker',
      imgUrl: projImg1,
      liveSite: true,
      liveUrl: 'https://money-manager-vert.vercel.app/',
      tech: 'ReactJs, React Query, Supabase, TailWind CSS, React-ChartJs',
      fullDesc:
        'Developed an intuitive web application using React.js and modern front-end technologies to help users manage their finances by tracking income and expenses across various categories.\n Designed an interactive dashboard to provide users with a comprehensive overview of income and expense categories.Included charts for visual representation of data.\nIntegrated Tanstack query for efficient remote state management, ensuring seamless data flow',
    },
    {
      id: 2,
      title: 'EHR System',
      description: 'A secure Electronic Health Records (EHR) web application',
      imgUrl: projImg2,
      liveSite: false,
      tech: 'ReactJs, NodeJs, Express, MongoDB',
      fullDesc:
        'Developed a secure Electronic Health Records (EHR) web application, streamlining hospital management and enhancing patient care by enabling faster data access and improved decision-making. Implemented user access management, providing tailored roles and permissions for hospital administration, doctors, and patients. Implemented MongoDB for efficient and scalable database management.',
    },
  ];

  function onSetOfProject(id) {
    let findSelectedProj = projects.filter(proj => {
      return proj.id === id;
    });
    setSelectedProj(findSelectedProj[0]);
    setShowDesc(true);
  }

  function onCloseDesc() {
    setShowDesc(false);
  }

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <h2 className="header-underline">Projects</h2>

                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                          onReadMore={onSetOfProject}
                        />
                      );
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
      {showDesc && (
        <Container>
          <Row>
            <Col size={12}>
              <ProjectDesc
                key={selectedProj.title}
                {...selectedProj}
                onCloseDesc={onCloseDesc}
              />
            </Col>
          </Row>
        </Container>
      )}
    </section>
  );
};
