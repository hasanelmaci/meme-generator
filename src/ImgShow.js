import React from "react";

export default function ImgShow(props) {
  return (
    <div className="meme-img">
      {props.allImgs.map((item) => (
        <img key={item.id} src={item.url} onClick={() => props.onClick(item)} />
      ))}
    </div>
  );
}
