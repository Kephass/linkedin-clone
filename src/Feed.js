import React from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Foto" color="#70B5F9" />
          <InputOption
            Icon={SubscriptionsIcon}
            title="Video"
            color="#Video"
            color="#E7A33E"
          />
          <InputOption
            Icon={EventNoteIcon}
            title="Evenementen"
            color="#C0CBCD"
          />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Artikel Schrijven"
            color="#7FC15E"
          />
        </div>
      </div>
      {/* Posts */}
    </div>
  );
}

export default Feed;
