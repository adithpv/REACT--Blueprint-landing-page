import React from "react";
import "../../components/styles/team.css";

import team01 from "../../components/images/team-01.jpg";
import team02 from "../../components/images/team-02.jpg";
import team03 from "../../components/images/team-03.jpg";
import team04 from "../../components/images/team-04.jpg";

const teamMembers = [
  {
    imgUrl: team01,
    name: "Adam Hugh",
    position: "Product Developer",
  },
  {
    imgUrl: team02,
    name: "Ann Betty",
    position: "Front-End Developer",
  },
  {
    imgUrl: team03,
    name: "Mark Wilson",
    position: "Product Designer",
  },
  {
    imgUrl: team04,
    name: "Chris Hawkes",
    position: "CEO",
  },
];

const Team = () => {
  return (
    <section className="our__team">
      <div className="container">
        <div className="team__content">
          <h6 className="subtitle">Our Team</h6>
          <h2>
            Meet with <span className="highlight">our team</span>{" "}
          </h2>
        </div>

        <div className="team__wrapper">
          {teamMembers.map((item, index) => (
            <div className="team__item" key={index}>
              <div className="team__img">
                <img src={item.imgUrl} alt="team member image" />
              </div>
              <div className="team__details">
                <h4>{item.name}</h4>
                <p className="description">{item.position}</p>

                <div className="team__member-social">
                  <span>
                    <i class="ri-linkedin-line"></i>
                  </span>
                  <span>
                    <i class="ri-twitter-line"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
