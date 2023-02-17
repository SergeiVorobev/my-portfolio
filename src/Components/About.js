import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>&emsp;&emsp;Backend software developer with a degree in Computer Science. Over last 5 years I have gathered experience in many software projects including:<br/>&emsp;&emsp;• <u>Venue app</u> to search for events, as well as to create your own events and meetings.<br/>&emsp;&emsp;• <u>Web weather service</u> to visualize weather data using Raspberry Pi, IoT sensors, SQLite and Python.<br/>&emsp;&emsp;• <u>Energy expenditure for running</u> to analysis of energy expenditure for running.<br/>&emsp;&emsp;• <u>Assets price prediction</u> to predict the closing assets price with the 60 day assets price.<br/>&emsp;&emsp;• <u>Health awareness system web application</u> illustrates personal medical data, educate a user about healthy food (study materials, quiz) and makes a prediction about the risk of increasing glucose in the blood.</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
