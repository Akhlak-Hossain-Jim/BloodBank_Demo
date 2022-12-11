import React, { useState } from "react";

// icon import
import { BsLifePreserver } from "react-icons/bs";
import {
  GiLifeJacket,
  GiLifeSupport,
  GiTurtleShell,
  GiBlackHandShield,
} from "react-icons/gi";
import { MdOutlineCleanHands } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";

// Components
import Badge from "../../components/Badge";
import Appointment from "../../components/Appointment";
import DashboardLayout from "../../layout/DashboardLayout";

function Profile() {
  const [CurrentNav, setCurrentNav] = useState(0);

  const Badges = [
    {
      name: "Life Saver+",
      icon: <BsLifePreserver />,
    },
    {
      name: "Life Saver",
      icon: <GiLifeJacket />,
    },
    {
      name: "Fast",
      icon: <GiLifeSupport />,
    },
    {
      name: "Certified",
      icon: <TbCertificate />,
    },
    {
      name: "Superman",
      icon: <GiTurtleShell />,
    },
    {
      name: "50 Life",
      icon: "50",
    },
    {
      name: "Clean",
      icon: <MdOutlineCleanHands />,
    },
    {
      name: "Protector",
      icon: <GiBlackHandShield />,
    },
  ];

  return (
    <DashboardLayout>
      <section className="profile_container grid_parent">
        <div>
          <section className="profile grid_parent">
            <div className="profile_box">
              <div className="cover_container">
                <img src={`/image/avater1.jpg`} alt="Dummy Avatar" />
                <div className="title_container">
                  <h1>Ashu Priya</h1>
                  <h6>Beginner Donor</h6>
                </div>
              </div>
              <div className="details_container">
                <div className="info">
                  <h4>Info:</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam, illo vel? Velit magnam ea fuga quibusdam, voluptatibus
                    blanditiis facilis. Debitis ducimus ullam sint maxime
                    magnam.
                  </p>
                </div>
                <div className="badgeContainer">
                  <h4>Badge</h4>
                  <div className="badgeContainer_flex">
                    <Badge name={Badges[0].name} icon={Badges[0].icon} />
                    <Badge name={Badges[1].name} icon={Badges[1].icon} />
                    <Badge name={Badges[2].name} icon={Badges[2].icon} />
                  </div>
                </div>
                <hr />
                <div className="progress_bar">
                  <div className="progress"></div>
                </div>
                <p className="info_next">
                  <span>3</span> days until you can donate again.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="profile_container__grid">
          <section className="Status">
            <div>
              <div className="nav">
                <button
                  className={`nav_item ${CurrentNav === 0 ? "active" : ""}`}
                  onClick={() => setCurrentNav(0)}
                >
                  Donations
                </button>
                <button
                  className={`nav_item ${CurrentNav === 1 ? "active" : ""}`}
                  onClick={() => setCurrentNav(1)}
                >
                  Requests
                </button>
              </div>
              {
                {
                  0: (
                    <div className="status_content">
                      <Appointment
                        month="Dec"
                        day="7"
                        hospitalName="IBN Shinah"
                        quantity="1"
                        dayLeft="6"
                      />
                      <Appointment
                        month="Dec"
                        day="7"
                        hospitalName="IBN Shinah"
                        quantity="1"
                        dayLeft="6"
                      />
                      <Appointment
                        month="Dec"
                        day="7"
                        hospitalName="IBN Shinah"
                        quantity="1"
                        dayLeft="6"
                      />
                    </div>
                  ),
                  1: (
                    <div className="status_content">
                      <Appointment
                        month="Jan"
                        day="17"
                        hospitalName="IBN Shinah"
                        quantity="1"
                        dayLeft="6"
                      />
                      <Appointment
                        month="Jan"
                        day="17"
                        hospitalName="IBN Shinah"
                        quantity="1"
                        dayLeft="6"
                      />
                      <Appointment
                        month="Jan"
                        day="17"
                        hospitalName="IBN Shinah"
                        quantity="1"
                        dayLeft="6"
                      />
                    </div>
                  ),
                }[CurrentNav]
              }
            </div>
          </section>
          <section className="badges">
            <h4>Badges</h4>
            <div className="badges_flex">
              {React.Children.toArray(
                Badges.map((badge) => <Badge {...badge} />)
              )}
            </div>
          </section>
        </div>
      </section>
    </DashboardLayout>
  );
}

export default Profile;
