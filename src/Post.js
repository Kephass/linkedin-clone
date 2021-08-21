import React from "react";
import { Avatar } from "@material-ui/core";
import { ShareOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import "./Post.css";
import InputOption from "./InputOption";

function Post({ name, description, postDate, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
          <p>{postDate}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption
          Icon={ThumbUpAltOutlined}
          title="Interessant"
          color="gray"
        />
        <InputOption Icon={ChatOutlinedIcon} title="Commentaar" color="gray" />
        <InputOption Icon={ShareOutlined} title="Delen" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Versturen" color="gray" />
      </div>
    </div>
  );
}

export default Post;
