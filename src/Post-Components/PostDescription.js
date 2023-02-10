import React from "react";

const PostDescription = ({ user, title }) => (
  <div className="postDescription">
    <h4>{user}</h4>
    <p>{title}</p>
  </div>
);
export default PostDescription;
