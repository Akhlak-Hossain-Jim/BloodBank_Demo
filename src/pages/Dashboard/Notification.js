import React from "react";

// icon import
import ShareIcon from "@material-ui/icons/Share";

// Components
import NotificationBox from "../../components/NotificationBox";
import DashboardLayout from "../../layout/DashboardLayout";

function Notification() {
  const Notifications = [
    {
      name: "Musa Clinic",
      group: "A+",
      tag: "today",
    },
    {
      name: "Musa Clinic",
      group: "A+",
      tag: "today",
    },
    {
      name: "Musa Clinic",
      group: <ShareIcon />,
      tag: "today",
    },
    {
      name: "Musa Clinic",
      group: "A+",
      tag: "yesterday",
    },
    {
      name: "Musa Clinic",
      group: "A+",
      tag: "yesterday",
    },
    {
      name: "Musa Clinic",
      group: <ShareIcon />,
      tag: "yesterday",
    },
    {
      name: "Musa Clinic",
      group: "A+",
      tag: "older",
    },
    {
      name: "Musa Clinic",
      group: "A+",
      tag: "older",
    },
    {
      name: "Musa Clinic",
      group: <ShareIcon />,
      tag: "older",
    },
  ];
  const HistoryNotifications = [
    {
      name: "Musa Clinic",
      group: "A+",
      tag: "today",
    },
    {
      name: "Musa Clinic",
      group: "A+",
      tag: "today",
    },
    {
      name: "Musa Clinic",
      group: <ShareIcon />,
      tag: "today",
    },
    {
      name: "Musa Clinic",
      group: "A+",
      tag: "older",
    },
    {
      name: "Musa Clinic",
      group: "A+",
      tag: "older",
    },
    {
      name: "Musa Clinic",
      group: <ShareIcon />,
      tag: "older",
    },
    {
      name: "Musa Clinic",
      group: "A+",
      tag: "older",
    },
    {
      name: "Musa Clinic",
      group: "A+",
      tag: "older",
    },
    {
      name: "Musa Clinic",
      group: <ShareIcon />,
      tag: "older",
    },
  ];
  return (
    <DashboardLayout>
      <div className="grid_parent grid_twoCol  notification_container">
        <section className="notifications">
          <h3>General</h3>
          <h4>Today</h4>
          {React.Children.toArray(
            Notifications.filter((el) => el.tag.includes("today")).map(
              (data) => <NotificationBox name={data.name} group={data.group} />
            )
          )}
          <h4>Yesterday</h4>
          {React.Children.toArray(
            Notifications.filter((el) => el.tag.includes("yesterday")).map(
              (data) => <NotificationBox name={data.name} group={data.group} />
            )
          )}
          <h4>Older</h4>
          {React.Children.toArray(
            Notifications.filter((el) => el.tag.includes("older")).map(
              (data) => <NotificationBox name={data.name} group={data.group} />
            )
          )}
        </section>
        <section className="notifications leftLine">
          <h3>History</h3>
          <h4>Today</h4>
          {React.Children.toArray(
            HistoryNotifications.filter((el) => el.tag.includes("today")).map(
              (data) => <NotificationBox name={data.name} group={data.group} />
            )
          )}
          <h4>Older</h4>
          {React.Children.toArray(
            HistoryNotifications.filter((el) => el.tag.includes("older")).map(
              (data) => <NotificationBox name={data.name} group={data.group} />
            )
          )}
        </section>
      </div>
    </DashboardLayout>
  );
}

export default Notification;
