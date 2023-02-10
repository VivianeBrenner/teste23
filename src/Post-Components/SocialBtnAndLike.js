import React, { useState } from "react";
const PostCardButtons = ({ like, newLike, by, likeCount }) => {
  const [saved, save] = useState("./assets/bookmark-outline.svg");
  const curtida = "./assets/heart-svgrepo-com.svg";
  const likeIcon = "./assets/heart-outline.svg";
  const saveIt = () => {
    if (saved === "./assets/bookmark-outline.svg") {
      save("./assets/bookmark.svg");
    } else save("./assets/bookmark-outline.svg");
  };
  return (
    <>
      <div className="postCardButtons">
        <div>
          <div>
            <img src={like ? curtida : likeIcon} alt="heart" data-test="like-post" onClick={newLike} />
          </div>
          <div>
            <ion-icon name="chatbubble-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
        </div>
        <div className="bookMark">
          <img src={saved} alt="salvar" data-test="save-post" onClick={saveIt} />
        </div>
      </div>

      <div className="postCardLikes">
        <img id="likeImgUser1" alt="" />
        <span>
          Curtido por<h4>{by}</h4>
          <p>e</p>
          <h4>
            outras
            <h4 data-test="likes-number">{likeCount}</h4>
            pessoas
          </h4>
        </span>
      </div>
    </>
  );
};
export default PostCardButtons;
