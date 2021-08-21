import { React, useState } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);

  const sendPost = (e) => {
    e.preventDefault();
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Foto" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
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
      {posts.map((post) => (
        <Post />
      ))}
      <Post
        name="Felix Kephas"
        description="Frontend Developer at ThisCompany"
        postDate="2 d"
        message="Damn wow doge"
      />
    </div>
  );
}

export default Feed;
