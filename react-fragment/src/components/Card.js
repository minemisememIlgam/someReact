import React from "react";
const Card = () => {
  return (
    <React.Fragment>
      //с помощью fragment можно заменять div и это //избавляет нас от лишнего
      дива в дом дереве
      <h1>Ilgam</h1>
      <h3>Mindubaev</h3>
      <button>Like!</button>
    </React.Fragment>
  );
};

export default Card;
