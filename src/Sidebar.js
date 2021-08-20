import React from "react";
import "./Sidebar.css";
import Avatar from "@material-ui/core/Avatar";

export default function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1629213609219-50ba43a26168?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt=""
        />
        <Avatar />
        <h2>Felix Oduro</h2>
        <h4>odurof99@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Profielbezoekers</p>
          <p className="sidebar__statNumber">389</p>
        </div>
        <div className="sidebar__stat">
          <p>Personen bekeken uw bijdrage</p>
          <p className="sidebar__statNumber">272</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}
