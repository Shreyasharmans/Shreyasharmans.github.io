import "./about.css";
import Resume from "../../img/pdf1.png";
import Shreya from "../../img/shreya.jpeg";
import VideoResume from "../../img/play.png";
import Pdf from "./Shreya_Resume.pdf";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <div className="box">
            <div className="imgBox">
          <img
            src={Shreya} alt=""
            className="a-img"
          />
         <div className="content">
				<h2>Shreya Sharma</h2>
				<p>
        “The only time you should look back, is to see how far you've come.” ...
				</p>
			</div>
      </div>
          </div>
          
        </div>
      </div>
      <br></br>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        My name is Shreya Sharma. I am from Himachal Pradesh, Currently I am pursuing my Bachelors of Technology in
        Computer Science and Engineering from Lovely Professional University.
        </p>
        <p className="a-desc">
Open minded and life-long learning are the qualities which a person in any 
domain should have and I possess all of them. Along with good interpersonal and communication skills. I have good knowledge
 in the domain of development, I also have practical experience in laravel framework and ReactJS and 
 have done various certifications and projects which includes Frontend Web Ui Framework with Bootstrao 4, Web development with specialization in Laravel Framework, Frontend UI with ReactJs, DSA self placed by GeeksForGeeks. 
 Full details of the following are mentioned in my resume below.</p>
        <div className="a-award">
        <h3 className="a-award-title">My Resume:</h3>
         <a href={Pdf} download="Resume.pdf" className="pdf"><img src={Resume} alt="" className="a-award-img" /></a>
          <div className="a-award-texts">
          
            <p className="a-award-desc">
            <a href="https://drive.google.com/file/d/1lGtN2ClGQKwXN48HvmXKsQDXjRYGDUYt/view?usp=sharing">
               <img src= {VideoResume} alt="videoresume"></img>
            </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
