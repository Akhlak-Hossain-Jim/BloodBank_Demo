import React from "react";
import { Link, useLocation } from "react-router-dom";

// icon import
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MapIcon from "@material-ui/icons/Map";
import SettingsIcon from "@material-ui/icons/Settings";

export default function DashBoardNav({ show }) {
  const location = useLocation();
  const navItems = [
    {
      title: "Home",
      icon: <HomeIcon />,
      href: "/Dashboard/",
    },
    {
      title: "Profile",
      icon: <PersonIcon />,
      href: "/Dashboard/profile/",
    },
    {
      title: "Notifications",
      icon: <NotificationsIcon />,
      href: "/Dashboard/notification/",
    },
    {
      title: "Donors",
      icon: <MapIcon />,
      href: "/Dashboard/donors/",
    },
    {
      title: "Setting",
      icon: <SettingsIcon />,
      href: "/Dashboard/settings/",
    },
  ];
  return (
    <nav className={`${show ? "" : "fly"}`}>
      <img src={`/image/logo512.png`} alt="Blood Bank logo" />
      <div className="nav_items">
        {React.Children.toArray(
          navItems.map((nav) => (
            <Link
              className={location.pathname === nav.href ? "active" : ""}
              to={nav.href}
            >
              {nav.icon}
              {nav.title}
            </Link>
          ))
        )}
      </div>
      <img className="poster" src={`/image/poster1.jpg`} alt="poster" />
    </nav>
  );
}
