import React, { useState } from "react";

const Usuario = () => {
  const [name, chanceName] = useState("user0911196");
  const [img, chanceImg] = useState(
    "https://mir-s3-cdn-cf.behance.net/user/115/89f32d10362213.5f8a195127eab.jpg"
  );

  const userName = () => {
    let newName = prompt("Digite seu nome");
    if (newName.trim().length == 0 || newName === null || newName === undefined) {
      return;
    }
    chanceName(newName);
  };

  const userImg = () => {
    let newImg = prompt("Entre com o link de uma imagem");
    if (newImg.trim().length == 0 || newImg === null || newImg === undefined) {
      return;
    }
    chanceImg(newImg);
  };
  return (
    <div className="profileCard">
      <img onClick={userImg} data-test="profile-image" src={img} />
      <div>
        <h4>@user_driven</h4>
        <div>
          <p data-test="name">{name}</p>
          <ion-icon data-test="edit-name" name="create-outline" onClick={userName}></ion-icon>
        </div>
      </div>
    </div>
  );
};
export default Usuario;
