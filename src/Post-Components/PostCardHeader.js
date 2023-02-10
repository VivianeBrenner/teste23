import React from "react";
const PostCardHeader = ({ id, nickName }) => (
  <div className="postCardHeader">
    <div className="postOwnerName">
      <img id={`userPostImg${id}`} alt="" />
      <h4>{nickName}</h4>
    </div>
    <ion-icon name="ellipsis-horizontal"></ion-icon>
  </div>
);
export default PostCardHeader;
