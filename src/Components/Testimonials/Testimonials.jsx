import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {
  return ( 
    <div classname="Testimonials">
      <img src={next_icon} alt='' classname ='next-btn'/>
      <img src={back_icon} alt='' classname ='back-btn'/>
      <div className="slider"></div> 
      <ul>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_1} alt=""/>
              <div>
                <h3>Shardul Vashisht </h3>
                <span>Edusity,Chandigarh </span>
              </div>
            </div>
            <p>
            Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
            </p>
          </div>
        </li>
                <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_2} alt=''/>
              <div>
                <h3>Nisha Sharma </h3>
                <span>Edusity,chandigarh </span>
              </div>
            </div>
            <p>
            Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
              
            </p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_3}alt=""/>
              <div>
                <h3>Priya Bajaj</h3>
                <span>Edusity,Mohali </span>
              </div>
            </div>
            <p>
            Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
              
            </p>
          </div>
        </li>        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_4}alt=""/>
              <div>
                <h3> Neha Sharma </h3>
                <span>Edusity,Noida </span>
              </div>
            </div>
            <p>
            Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
              
            </p>
          </div>
        </li>
      </ul>
       </div>
  )
}

export default Testimonials
