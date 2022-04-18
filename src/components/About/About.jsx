import React from 'react'
import "./about.css"
const About = () => {
  return (
    <div className='a' id="about">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img  className='a-img' src="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
        </div>
        <div className="a-right">
           <h1 className='a-title'>About me</h1> 
           <p className='a-sub'>
               <h2>Education</h2>
               <br />
               <p><b>BTECH - VR SIDDARTHA ENGINEERING COLLEGE -(CGPA-8.45/10)</b></p>
               <br />
              <h2>Awards And Achievements</h2>
         

              <ul>
                  <li>
           <div className="a-award">
               
               <div className="a-award-texts">
               <h4 className="a-award-title">Won 3rd prize in the  Engineer’s Day competition</h4>
               <div className="a-award-desc">I Participated in both 2nd year and 3rd year for Engineer’s Day competition organized by the CSE department of our college, Where I took as a challenge and secured 3rd prize in the 3rd year. </div>
               </div> 
           </div>
           </li>
<li>
           <div className="a-award">
              
               <div className="a-award-texts">
               <h4 className="a-award-title">TOP 5% in Programming,Data Structures And Algorithms Using Python </h4>
               <div className="a-award-desc">Secured top 5% in the Programming ,Data and Algorithms using python. </div>
               </div> 
           </div>
           </li>
           </ul>
           </p>
        </div>
    </div>
  )
}

export default About