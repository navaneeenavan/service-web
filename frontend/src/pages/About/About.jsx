import React from "react";
import Navbar from "components/PublicNavbar/PublicNavbar";
import { useQuery } from "react-query";
import { getAllCommitteePublic } from "APIs/user";

import "./About.scss";

const CommitteeCard = ({ imageUrl, name, designation }) => {
  return (
    <div className="CommitteeCard">
      <img src={imageUrl} alt={name} />
      <div className="info">
        <h2>{name}</h2>
        <p>{designation}</p>
      </div>
    </div>
  );
};

const GrievanceForm = () => {
  return (
    <div className="GrievanceForm">
      <h2>Submit Your Grievance</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="attachment">Attachment</label>
          <input type="file" id="attachment" name="attachment" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const About = () => {
  const { data = [], isLoading } = useQuery("fetchCommitteeMembers", getAllCommitteePublic);

  return (
    <>
      <div className="About">
        <Navbar />
        {isLoading ? (
          <></>
        ) : (
          <div className="About__content animate__animated animate__fadeIn">
            <div className="About__header">
              <h1>The Board of City  Development</h1>
            </div>
            <GrievanceForm />
            <Services />
          </div>
        )}
      </div>
    </>
  );
};
const Services = () => {
  const services = [
    {
      title: "Healthcare Services",
      description: "Access to public health services, hospitals, and clinics.",
      iconUrl: "https://via.placeholder.com/100", // Replace with actual icon URL
    },
    {
      title: "Education Services",
      description: "Public schools, universities, and educational programs.",
      iconUrl: "https://via.placeholder.com/100", // Replace with actual icon URL
    },
    {
      title: "Transportation Services",
      description: "Public transportation options including buses and trains.",
      iconUrl: "https://via.placeholder.com/100", // Replace with actual icon URL
    },
    {
      title: "Housing Services",
      description: "Affordable housing programs and assistance.",
      iconUrl: "https://via.placeholder.com/100", // Replace with actual icon URL
    },
    {
      title: "Employment Services",
      description: "Job placement programs and unemployment benefits.",
      iconUrl: "https://via.placeholder.com/100", // Replace with actual icon URL
    },
  ];

  return (
    <div className="Services">
      <h2>Services Offered by the Government</h2>
      <div className="Services__list">
        {services.map((service, index) => (
          <div className="ServiceCard" key={index}>
            <img src={service.iconUrl} alt={service.title} />
            <div className="info">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="view-more">View More</button>
    </div>
  );
};
export default About;
