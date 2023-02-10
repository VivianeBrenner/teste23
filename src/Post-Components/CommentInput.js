import React, { useState } from "react";
import CommentField from "./CommentField";

const CommentInput = () => {
  const [comments, addComment] = useState([]);
  const comment = (text, user = "user_driven") => ({ user, text });
  function newComment(event) {
    const input = event.target.querySelector("input");
    let value = input.value;
    input.value = "";
    addComment(comments.concat(comment(value)));
  }
  return (
    <>
      {comments.map((comment, index) => (
        <CommentField key={`comment${index}`} name={comment.user} comment={comment.text} />
      ))}
      <form
        className="commentInput"
        onSubmit={(e) => {
          e.preventDefault();
          newComment(e);
        }}
      >
        <ion-icon name="happy-outline"></ion-icon>
        <input placeholder="Adicione um comentário..." />
        <button>
          <h4>Sends</h4>
        </button>
      </form>
    </>
  );
};
export default CommentInput;
