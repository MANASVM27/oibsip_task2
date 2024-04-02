import React from 'react';
import '../assets/Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="intro">
        <img src="https://res.cloudinary.com/dfrc94azr/image/upload/v1712062550/WhatsApp_Image_2024-04-02_at_6.25.05_PM_jc1s5b.jpg" alt="Profile" className="profile-image" />
        <h1>Manas V M</h1>
        <p>Student at Sri Krishna College of Technology</p>
      </div>
      <div className="contact">
        <h2>Contact Information</h2>
        <ul>
          <li>Email: manasvm27@gmail.com</li>
          <li>Phone: +91 9677773069</li>
          <li>Website: https://www.linkedin.com/in/manas-v-m-a47ba8238/</li>
        </ul>
      </div>
      <div className="samples">
        {/* <h2>Portfolio Samples</h2> */}
        <div className="sample">
          <img src="https://res.cloudinary.com/dfrc94azr/image/upload/v1712062872/Screenshot_2024-04-02_182957_dc4kcu.png" alt="Sample 1" />
          <p>Project 1 Description</p>
          <p>Built a responsive, interactive web application using ReactJS and JavaScript, featuring modern UI         
components and efficient data handling. </p>
        </div>
        <div className="sample">
          <img src="https://res.cloudinary.com/dfrc94azr/image/upload/v1712063058/Screenshot_2024-04-02_183338_qg9cwy.png" alt="Sample 2" />
          <p>Project 2 Description</p>
          <p>Built a full-stack web application with ReactJS for the frontend and Spring Boot for the backend, utilizing 
MySQL for data storage and leveraging REST APIs for efficient communication between layers. </p>
        </div>
        <div className="sample">
          <img src="https://res.cloudinary.com/dfrc94azr/image/upload/v1712063317/Screenshot_2024-04-02_183742_vgpgaf.png" alt="Sample 3" />
          <p>Project 3 Description</p>
          <p>Built a full-stack web application with ReactJS for the frontend and Spring Boot for the backend, utilizing 
MySQL for data storage, REST APIs for communication between layers and microservices. </p>
        </div>
      </div>
      <div className="resume">
        <h2>Resume</h2>
        <p>Download my resume <a href="https://drive.google.com/file/d/16cbDVfpa1LnDCvcQoPDQvs_5YNJOF8Tq/view?usp=sharing" target="_blank">here</a>.</p>
      </div>
    </div>
  );
}

export default Portfolio;
