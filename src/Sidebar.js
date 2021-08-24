import React from "react";
import "./Sidebar.css";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

export default function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__items sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  const groups = (group) => (
    <div className="sidebar__items sidebar__groupItem">
      <span className="sidebar__hash">#</span>
      <p>{group}</p>
    </div>
  );

  const followedHashtags = (hashtags) => (
    <div className="sidebar__items sidebar__followedHastags">
      <span className="sidebar__hash">#</span>
      <p>{hashtags}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1629213609219-50ba43a26168?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
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
        <div className="sidebar__bottom-tab">
          <p>Recent</p>
          {recentItem("reactjs")}
          {recentItem("programming")}
          {recentItem("careers")}
          {recentItem("design")}
          {recentItem("developer")}
          {recentItem("economy")}
        </div>
        <div className="sidebar__bottom-tab">
          <p>Groepen</p>
          {groups("zerotomastery.io")}
          <p className="sidebar__bottom-viewMore">Alles weergeven</p>
        </div>
        <div className="sidebar__bottom-tab">
          <p>Gevolgde hashtags</p>
          {followedHashtags("careers")}
          {followedHashtags("money")}
          {followedHashtags("future")}
        </div>
      </div>
    </div>
  );
}
