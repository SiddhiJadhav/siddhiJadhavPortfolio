import skillReact from '../assets/img/skill-react.svg';
import skillRedux from '../assets/img/skill-redux.svg';
import skillNodeJs from '../assets/img/skill-node-js.svg';
import skillMongoDB from '../assets/img/skill-mongodb.svg';
import skillExpress from '../assets/img/skill-express.svg';
import skillHtml from '../assets/img/skill-html5.svg';
import skillCss from '../assets/img/skill-css3.svg';
import skillJavaScript from '../assets/img/skill-javascript.svg';
import skillJava from '../assets/img/skill-java.svg';
import skillTypeScript from '../assets/img/skill-typescript.svg';
import skillJQuery from '../assets/img/skill-jquery.svg';
import skillSql from '../assets/img/skill-sql.svg';
import skillTailwind from '../assets/img/skill-tailwind.svg';
import skillGit from '../assets/img/skill-git.svg';

import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="header-underline">Skills</h2>

              <div className="skill-slider">
                <div className="item">
                  <img src={skillReact} alt="React" />
                  <h5>React Js</h5>
                </div>
                <div className="item">
                  <img src={skillRedux} alt="Redux" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={skillNodeJs} alt="NodeJs" />
                  <h5>Node Js</h5>
                </div>
                <div className="item">
                  <img src={skillExpress} alt="Express" />
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <img src={skillMongoDB} alt="MongoDB" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={skillJavaScript} alt="JavaScript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={skillHtml} alt="HTML" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={skillCss} alt="CSS" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={skillJQuery} alt="jQuery" />
                  <h5>jQuery</h5>
                </div>
                <div className="item">
                  <img src={skillTypeScript} alt="TypeScript" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={skillJava} alt="Java" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={skillSql} alt="SQL" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={skillTailwind} alt="Tailwind" />
                  <h5>Tailwind</h5>
                </div>
                <div className="item">
                  <img src={skillGit} alt="Git" />
                  <h5>Git</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
