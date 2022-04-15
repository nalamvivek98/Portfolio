import React from 'react'
import { useRef,useContext } from 'react'
import "./contact.css"
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';
import cell from "../../img/Touch_mobile.png"
import email from "../../img/email.png"
import address from "../../img/address.png"
const Contact = () => {

    const theme=useContext(ThemeContext)
    const darkMode=theme.state.darkMode;

    const formRef=useRef();
    const [done,setdone]=React.useState(false);

   function handleSubmit(e){
       e.preventDefault();
       emailjs.sendForm('service_o41rv82', 'template_ju0k92m', formRef.current, 'KdvfW_qK4hDuLBi-F')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setdone(true);
    console.log("hello");
   }

  return (
    <div className='c' id="contact">
        <div className='c-bg'></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className='c-title'>Let's discuss your project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img className='c-icon' src={cell} alt="Call" />+919603036878
                    </div>
                    <div className="c-info-item">
                        <img className='c-icon' src={email} alt="Email" />nalamvivek98@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img className='c-icon' src={address} alt="Address" />Door no:77-16-13,Bhaskar Rao Street,Santhi Nagar,520015
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className='c-desc'>
                    <b>whats your story?</b> Get  in the right project
                </p>
                <form ref={formRef} onSubmit={handleSubmit} >
                    <input style={{backgroundColor:darkMode && "#333",color:"white" }} type="text" placeholder='Name' name='user_name'/>
                    <input style={{backgroundColor:darkMode && "#333",color:"white" }} type="text" placeholder='Subject' name='user_subject'/>
                    <input style={{backgroundColor:darkMode && "#333" ,color:"white"}} type="text" placeholder='Email' name='user_email'/>
                    <textarea rows="6" style={{backgroundColor:darkMode && "#333",color:"white" }} placeholder="Message for vivek" name="message"></textarea>
                    <button>Submit</button>
                    {done && <p>Thank you for your reply</p>}
                </form>
            </div>
        </div>

        </div>
  )
}

export default Contact