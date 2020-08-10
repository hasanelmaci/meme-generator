import React from "react";
import ImgShow from "./ImgShow";
import MemeGenerator from "./MemeGenerator";

export default class GetPics extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      memePics: [],
      currentMeme: "https://i.imgflip.com/4t0m5.jpg",
    };
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const memes = response.data.memes;
        this.setState({ memePics: memes, isLoaded: true });
      })

      .catch((err) => console.log(err));
  }

  imgChoose = (event) => {
    this.setState({ currentMeme: event.url });
    window.scrollTo(0, 0);
  };

  render() {
    if (this.state.isLoaded === false) {
      return null;
    } else if (this.state.isLoaded === true) {
      return (
        <div>
          <MemeGenerator currentMeme={this.state.currentMeme} />

          <ImgShow allImgs={this.state.memePics} onClick={this.imgChoose} />
        </div>
      );
    }
  }
}
