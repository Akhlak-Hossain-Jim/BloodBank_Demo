import React, { useEffect, useState } from "react";
import DashboardLayout from "../../layout/DashboardLayout";
import Badge from "../../components/Badge";

// icon import
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { BsHourglassSplit } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import {
  FaHandHoldingWater,
  FaHandHoldingHeart,
  FaThList,
} from "react-icons/fa";

function Home() {
  const [currentCampaign, setCurrentCampaign] = useState(0);
  const [ShowingArray, setShowingArray] = useState(0);
  const CampaignData = [
    {
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "dummy camp",
      link: "",
    },
    {
      image:
        "https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      name: "dummy camp",
      link: "",
    },
    {
      image:
        "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "dummy camp",
      link: "",
    },
    {
      image:
        "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "dummy camp",
      link: "",
    },
    {
      image:
        "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "dummy camp",
      link: "",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "dummy camp",
      link: "",
    },
  ];
  const CDData = [...CampaignData, ...CampaignData];

  const Menus = [
    {
      name: "Book",
      icon: <FiMonitor />,
      href: "",
    },
    {
      name: "Donation",
      icon: <FaHandHoldingWater />,
      href: "/Dashboard/Donations",
    },
    {
      name: "Donors",
      icon: <FaHandHoldingHeart />,
      href: "/Dashboard/Donors",
    },
    {
      name: "My List",
      icon: <FaThList />,
      href: "",
    },
  ];

  const Requests = [
    {
      name: (
        <>
          Urgent <br /> Request
        </>
      ),
      icon: <BsHourglassSplit />,
      href: "",
    },
    {
      name: (
        <>
          My <br />
          Request
        </>
      ),
      icon: <FaHandHoldingHeart />,
      href: "",
    },
    {
      name: (
        <>
          Post <br /> Request
        </>
      ),
      icon: <FaHandHoldingWater />,
      href: "",
    },
  ];

  useEffect(() => {
    let arr = [];
    arr.push(CDData[currentCampaign]);
    arr.push(CDData[currentCampaign + 1]);
    arr.push(CDData[currentCampaign + 2]);
    arr.push(CDData[currentCampaign + 3]);
    setShowingArray(arr);
  }, []);

  const handleSlide = (value) => {
    setCurrentCampaign(value);
    let arr = [];
    arr.push(CDData[currentCampaign]);
    arr.push(CDData[currentCampaign + 1]);
    arr.push(CDData[currentCampaign + 2]);
    arr.push(CDData[currentCampaign + 3]);
    setShowingArray(arr);
  };

  return (
    <DashboardLayout>
      <div className="home_container">
        <section className="campaigns">
          <span
            className="arrowIco"
            onClick={() =>
              handleSlide(
                currentCampaign === 0
                  ? CampaignData.length - 1
                  : currentCampaign - 1
              )
            }
          >
            <ArrowBackIosIcon />
          </span>
          <div className="campaigns_slides">
            {ShowingArray &&
              Array.isArray(ShowingArray) &&
              ShowingArray.length > 0 &&
              React.Children.toArray(
                ShowingArray.map((el) => (
                  <div
                    className="campaign_slides-slide"
                    role="button"
                    onClick={(e) =>
                      !el.link
                        ? e.preventDefault()
                        : window.open(el.link, "_blank")
                    }
                  >
                    <img src={el.image} alt={el.name} />
                  </div>
                ))
              )}
            {/* <div
              className="campaign_slides-slide"
              role="button"
              onClick={(e) =>
                !CampaignData[currentCampaign].link
                  ? e.preventDefault()
                  : window.open(CampaignData[currentCampaign].link, "_blank")
              }
            >
              <img
                src={CampaignData[currentCampaign].image}
                alt={CampaignData[currentCampaign].name}
              />
            </div>
            <div
              className="campaign_slides-slide"
              role="button"
              onClick={(e) =>
                !CampaignData[
                  currentCampaign === CampaignData.length - 2
                    ? 1
                    : currentCampaign + 1
                ].link
                  ? e.preventDefault()
                  : window.open(
                      CampaignData[
                        currentCampaign === CampaignData.length - 2
                          ? 1
                          : currentCampaign + 1
                      ].link,
                      "_blank"
                    )
              }
            >
              <img
                src={
                  CampaignData[
                    currentCampaign === CampaignData.length - 2
                      ? 1
                      : currentCampaign + 1
                  ].image
                }
                alt={
                  CampaignData[
                    currentCampaign === CampaignData.length - 2
                      ? 1
                      : currentCampaign + 1
                  ].name
                }
              />
            </div>
            <div
              className="campaign_slides-slide"
              role="button"
              onClick={(e) =>
                !CampaignData[
                  currentCampaign === CampaignData.length - 3
                    ? 2
                    : currentCampaign + 2
                ].link
                  ? e.preventDefault()
                  : window.open(
                      CampaignData[
                        currentCampaign === CampaignData.length - 3
                          ? 2
                          : currentCampaign + 2
                      ].link,
                      "_blank"
                    )
              }
            >
              <img
                src={
                  CampaignData[
                    currentCampaign === CampaignData.length - 3
                      ? 2
                      : currentCampaign + 2
                  ].image
                }
                alt={
                  CampaignData[
                    currentCampaign === CampaignData.length - 3
                      ? 2
                      : currentCampaign + 2
                  ].name
                }
              />
            </div>
            <div
              className="campaign_slides-slide"
              role="button"
              onClick={(e) =>
                !CampaignData[
                  currentCampaign === CampaignData.length - 4
                    ? 3
                    : currentCampaign + 3
                ].link
                  ? e.preventDefault()
                  : window.open(
                      CampaignData[
                        currentCampaign === CampaignData.length - 4
                          ? 3
                          : currentCampaign + 3
                      ].link,
                      "_blank"
                    )
              }
            >
              <img
                src={
                  CampaignData[
                    currentCampaign === CampaignData.length - 4
                      ? 3
                      : currentCampaign + 3
                  ].image
                }
                alt={
                  CampaignData[
                    currentCampaign === CampaignData.length - 4
                      ? 3
                      : currentCampaign + 3
                  ].name
                }
              />
            </div> */}
          </div>
          <span
            className="arrowIco l"
            onClick={() =>
              handleSlide(
                currentCampaign === CampaignData.length - 1
                  ? 0
                  : currentCampaign + 1
              )
            }
          >
            <ArrowForwardIosIcon />
          </span>
        </section>
        <div className="grid_parent home_container__grid">
          <div className="grid_parent">
            <section className="home_container__grid-menus">
              <h3>Menus</h3>
              <div className="home_container__grid-menus_menu">
                {React.Children.toArray(
                  Menus.map((menu) => (
                    <a
                      href={menu.href}
                      onClick={(e) => !menu.href && e.preventDefault()}
                    >
                      <Badge icon={menu.icon} name={menu.name} />
                    </a>
                  ))
                )}
              </div>
            </section>
            <section className="home_container__grid-requests">
              <h3>Requests</h3>
              <div className="home_container__grid-requests_reqS">
                {React.Children.toArray(
                  Requests.map((req) => (
                    <a
                      href={req.href}
                      onClick={(e) => !req.href && e.preventDefault()}
                    >
                      <Badge icon={req.icon} name={req.name} />
                    </a>
                  ))
                )}
              </div>
              <br />
              <h3>Statistic</h3>
              <img src={`/image/stat.png`} alt="" />
            </section>
          </div>
          <section className="map_container">
            <h3>Map</h3>
            <iframe
              title="Map"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Home;
