import React, { useState } from "react";

const CommentField = (props) => {
  const [like, likeState] = useState(false);
  const curtido = "./assets/heart-svgrepo-com.svg";
  const heart = "./assets/heart-outline.svg";

  function likeButton() {
    likeState(!like);
  }

  return (
    <div className="newComment">
      <div className="theComment">
        <div>
          <h4>{props.name}</h4>
          <p>{props.comment}</p>
        </div>
        <img src={like ? curtido : heart} onClick={likeButton} />
      </div>
    </div>
  );
};
export default CommentField;
