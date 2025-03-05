import tcsLogo from '../assets/img/tcsLogo.png';
import { ExperienceProjectDetails } from './ExperiencePojectDetails';

export const ExperienceDetails = () => {
  const companyProjects = [
    {
      projName: 'SMART Application',
      projDesc: `- Involved in development of MERN based web application to log and
            update “Change Requests” provided by stakeholders.- As a
            Developer, implemented responsive design, role-based access control
            and dynamically tailored the UI based on user types, ensuring a
            customized and efficient user experience leveraging libraries like
            Redux-Toolkit, React Router. For Backend, designed scalable, secure
            RESTful APIs using Node.js, Express, and MongoDB. Enhanced
            application security with JWT-based authentication and bcrypt
            encryption, ensuring safe user sessions.- Collaborated
            closely with SBI stakeholders to gather requirements, ensuring a
            seamless integration cross-functional teams, including QA engineers`,
    },
    {
      projName: 'Centralized Reporting System ',
      projDesc: `- Contributed to the development of a banking audit reporting system for generating, enquiring and auditing quarterly reports. - Implemented role-based access control with five user levels, featuring a dynamic React UI for personalized access and security. - Developed RESTful APIs using Node.js, Express.js, and Oracle SQL to enable efficient data processing and integration.
`,
    },
    {
      projName: ' SSO Applications',
      projDesc: `- Developed a user-friendly interface for Single Sign-On (SSO) functionality in React,
enabling seamless authentication across multiple banking applications.
- Integrated RESTful APIs for backend communication, handling token-based
authentication and session management`,
    },
    {
      projName: 'NEW BRANCH CHANNEL',
      projDesc: `- Contribute to the migration of existing Internal Banking web application to a browser independent Java based web application for a client with over 25,000 branches and
3,800 transactions.
- Involved in development of various transaction screens in different modules like
Deposit, Loans, Customers etc. with help of technologies like Java struts, JavaScript
and SQL.
- Software development involves designing, analysis, coding, unit testing and debugging
the application.`,
    },
  ];

  return (
    <div className="experienceDetails">
      <div className="experienceDetailsHeader">
        <div className="company-logo">
          <img src={tcsLogo} alt="React" />
        </div>
        <div className="company-details">
          <h2>Tata Consultancy Services</h2>
          <h4>SYSTEM ENGINEER (Feb 2021 - Present)</h4>
        </div>
      </div>
      {companyProjects.map(project => {
        return (
          <ExperienceProjectDetails
            projectName={project.projName}
            projectDesc={project.projDesc}
          />
        );
      })}
    </div>
  );
};
