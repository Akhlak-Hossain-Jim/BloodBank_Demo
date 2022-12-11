import React, { useEffect, useState } from "react";

// Components

import Hospitals from "../../components/Hospitals";
import HistoryBox from "../../components/HistoryBox";
import ReviewBox from "../../components/ReviewBox";
import DashboardLayout from "../../layout/DashboardLayout";

function Donations() {
  const [timesDonated, setTimesDonated] = useState(0);
  const [unitsDonated, setUnitsDonated] = useState(0);
  const HospitalData = [
    {
      name: "Musa Clinic",
      address: "12/3, Loa Angeles, CA",
      time: "Monday, 12 Jan, 11:00 PM",
    },
    {
      name: "Musa Clinic",
      address: "12/3, Loa Angeles, CA",
      time: "Monday, 12 Jan, 11:00 PM",
    },
    {
      name: "Musa Clinic",
      address: "12/3, Loa Angeles, CA",
      time: "Monday, 12 Jan, 11:00 PM",
    },
  ];
  const HistoryData = [
    {
      name: "Kingland Hospital",
      times: 2,
      units: 5,
    },
    {
      name: "Kingland Hospital",
      times: 2,
      units: 5,
    },
    {
      name: "Kingland Hospital",
      times: 2,
      units: 5,
    },
  ];
  const Reviews = [
    {
      avatar: `/image/female.png`,
      name: "Ayesha Rahman",
      time: "Dec 26",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, enim animi. Iste magnam assumenda in? Libero numquam possim.",
    },
    {
      avatar: `/image/female.png`,
      name: "Ayesha Rahman",
      time: "Dec 26",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, enim animi. Iste magnam assumenda in? Libero numquam possim.",
    },
  ];

  useEffect(() => {
    let TI = 0;
    let UN = 0;
    for (let el of HistoryData) {
      TI += el.times;
      UN += el.units;
    }
    setTimesDonated(TI);
    setUnitsDonated(UN);
  }, []);

  return (
    <DashboardLayout>
      <div className="donation_container">
        <section className="hospitalDescription">
          {React.Children.toArray(
            HospitalData.map((hospital) => <Hospitals {...hospital} />)
          )}
        </section>
        <div className="grid_parent grid_twoCol donation_container__grid">
          <section className="donation_history">
            <h2>History</h2>
            <div className="history_container">
              <h3>
                You have saved {timesDonated} lives, Donated {unitsDonated} unit
              </h3>
              <div className="histories">
                {React.Children.toArray(
                  HistoryData.map((history, index) => (
                    <HistoryBox serial={index + 1} {...history} />
                  ))
                )}
              </div>
            </div>
          </section>
          <section className="donation_review">
            <h2>Reviews</h2>
            {React.Children.toArray(
              Reviews.map((review) => <ReviewBox {...review} />)
            )}
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Donations;
