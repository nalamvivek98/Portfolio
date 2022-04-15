import React from 'react'
import "./about.css"
import py from "../../img/py.jpg"
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
               It is a long established fact that a reader will be readable content. 
           </p>

           <p className='a-desc'>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem quam qui adipisci, nulla minima rerum esse libero vel voluptatibus aperiam praesentium. Sint recusandae adipisci modi, consequatur et fugiat ex dicta.
               Provident, molestiae?
           </p>

           <div className="a-award">
               <img src={py} alt=""  className='a-award-img'/>
               <div className="a-award-texts">
               <h4 className="a-award-title">TOP 5% in Programming,Data Structures And Algorithms Using Python</h4>
               <div className="a-award-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit obcaecati nihil autem, quis rem aperiam voluptatem. Dolorem omnis fuga quos dolorum sunt commodi voluptate fugit, sequi voluptas illum ab ipsa!</div>
               </div> 
           </div>
        </div>
    </div>
  )
}

export default About