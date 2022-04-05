import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
function Post({ Username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar className="post_avatar" alt="UserName" src={imageUrl} />
        <h3>{Username}</h3>
      </div>
      <img className="post_image" src={imageUrl} alt="ErrorUserImage" />
      <h4 className="post_text">
        <strong>{Username}</strong>
        {caption}
      </h4>
    </div>
  );
}

export default Post;
