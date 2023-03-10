import React, { Component } from 'react';

class AboutUs extends Component {
    render() {
        return (
            <div>
        <div className="card mb-3 text-center">
          <img src="./assets/About-Us.webp" className="card-img-top" alt="./assets/slider1.webp"  width={1600} height={400} />
          <div className="card-body">
            <h5 className="card-title">About Us</h5>
            <p className="card-text">E-Commerce Platform for Small Scale Vendors is a web-based application which intends to create a supportive environment for local vendors.  It is a small step towards the 'Make in India' initiative. The main inspiration behind this project is Open Network Digital Commerce (ONDC) program run by the Indian Government. There are three modules User, Admin, Seller In which Admin can control all services and also able to maintain the user records, Seller can add / update / delete the products. This application provides user-friendly, secure, faster and better communication.The platform displays and provides various numbers of products to purchase for end users. User Interface, developed in React uses user Id to authenticate and data is imported using REST. UI makes secure calls to Spring Boot. In the backend, JAVA is used to fetch and manipulate the data and used MySQL as database.</p>
            {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
          </div>
        </div>
        <div className="card text-center">
          <div className="card-body">
            <h1 className="card-title text-primary"> Meet Our Team </h1>
            <h3>Miss. Supriya Samal </h3>
            <p className="card-text">PRN-220960520074</p>
            <p className="card-text">PG-DAC CDAC Kochi Sept-2022</p> 
          </div>
          {/* <img src="./assets/thanks.png" className="card-img-bottom" alt="./assets/slider1.webp"  width={1600} height={200} /> */}
        </div>
        <div className="card text-center">
          <div className="card-body"> 
            <h3>Miss. Prajakta Kambale </h3>
            <p className="card-text">PRN-220960520043</p>
            <p className="card-text">PG-DAC CDAC Kochi Sept-2022</p> 
          </div>
        </div>
        <div className="card text-center">
          <div className="card-body">
            <h3>Mrs. Seethal Sharma </h3>
            <p className="card-text">PRN-220960520063</p>
            <p className="card-text">PG-DAC CDAC Kochi Sept-2022</p> 
          </div>
        </div>
        <div className="card text-center">
          <div className="card-body">  
            <h3>Miss. Yashashree Toraskar</h3>
            <p className="card-text">PRN-220960520089</p>
            <p className="card-text">PG-DAC CDAC Kochi Sept-2022</p> 
          </div>
        </div>
        <div className="card text-center">
          <div className="card-body">
            <h3>Mr. Rahul Sonawane </h3>
            <p className="card-text">PRN-220960520048</p>
            <p className="card-text">PG-DAC CDAC Kochi Sept-2022</p> 
          </div>
        </div>
        <div className="card text-center">
          <div className="card-body">
            <h3>Mr. Vivek Chaturvedi </h3>
            <p className="card-text">PRN-220960520086</p>
            <p className="card-text">PG-DAC CDAC Kochi Sept-2022</p> 
          </div>
        </div>
        <div className="card text-center">
          <div className="card-body">
            <h3>Mr. Mayur Patil </h3>
            <p className="card-text">PRN-220960520030</p>
            <p className="card-text">PG-DAC CDAC Kochi Sept-2022</p> 
          </div>
        </div>
        <div className="card text-center ">
          <div className="card-body">
          <h1 className="card-title text-primary"> Under Guidance of  </h1>
            <h3>Mrs. Bindu P Madam </h3>
            <p className="card-text">Project Engineer</p>
            <p className="card-text">CDAC Kochi </p> 
          </div>
        </div>
      </div>
        );
    }
}

export default AboutUs;