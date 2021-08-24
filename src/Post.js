import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import { ShareOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import "./Post.css";
import InputOption from "./InputOption";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
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
});

export default Post;
