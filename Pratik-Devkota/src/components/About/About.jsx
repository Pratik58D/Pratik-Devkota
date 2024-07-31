import React from "react"
import "./About.css"
import pratikProfile from "../../assets/Profilephto.jpg"

const About = () => {
  return (
    <div className="about">
        <div className="about-title">
            <h1>About me</h1>
        </div>
        <div className="about-section">
            <div className="about-left">

                <img src={pratikProfile} alt="Pratik Photo" />
            </div>
            <div className="about-right">
            <div className="about-para">
                <p>Hello! I'm Pratik Devkota, a passionate developer and data scientist with expertise in creating dynamic and efficient web applications.</p>
                <p> With a strong background in both frontend and backend technologies, I specialize in using React for building interactive user interfaces and Python with Django for robust server-side development.</p>
                </div>
                <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr  style={{width:"50%"}}/></div>
                <div className="about-skill"><p>React</p><hr  style={{width:"30%"}}/></div>

                <div className="about-skill"><p>Python</p><hr  style={{width:"50%"}}/></div>

                <div className="about-skill"><p>django framework</p><hr  style={{width:"30%"}}/></div>
                <div className="about-skill"><p>Machine Learning</p><hr  style={{width:"20%"}}/></div>

            </div>
            

            </div>
           
          

        </div>
      
      
    </div>
  )
}

export default About
