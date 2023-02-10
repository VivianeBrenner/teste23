import React, { useState } from "react";
import PostMidia from "./PostMidia";
import SocialBtnAndLike from "./SocialBtnAndLike";
import PostDescription from "./PostDescription";
import CommentField from "./CommentField";
import CommentInput from "./CommentInput";
const PostCardFooter = ({ type, src, yourName, yourTitle, comments, likedAmount, likeBy }) => {
  const [like, postLike] = useState(false);
  const [likeCount, newCountValue] = useState(0);
  const [click, setClick] = useState(1);
  const [heart, setHeart] = useState(false);

  function newLike() {
    postLike(!like);
    if (like) {
      newCountValue(0);
    } else {
      newCountValue(1);
    }
  }
  const handleClick = () => {
    setClick(click + 1);
    if (click >= 2) {
      postLike(true);
      newCountValue(1);
      setHeart(true);
      setTimeout(setHeart, 500, false);
    }
    setTimeout(setClick, 400, 1);
  };
  return (
    <>
      <PostMidia handleClick={handleClick} src={src} heart={heart} type={type} />
      <div className="postCardFooter">
        <SocialBtnAndLike
          newLike={newLike}
          likeCount={parseInt(likedAmount) + likeCount}
          like={like}
          by={likeBy}
        />
        <section className="comments">
          <PostDescription user={yourName} title={yourTitle} />
          {comments.map((comment, index) => (
            <CommentField key={`comment${index}`} name={comment.nickName} comment={comment.text} />
          ))}
          <CommentInput />
        </section>
      </div>
    </>
  );
};
export default PostCardFooter;
