import React from "react";
import Draggable from "react-draggable";

export default class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      text1: "",
      text2: "",
      text3: "",
      text4: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="generate">
        <img className="mymeme" src={this.props.currentMeme} />

        <Draggable bounds="parent">
          <h2 className="h2text1">{this.state.text1}</h2>
        </Draggable>
        <Draggable bounds="parent">
          <h2 className="h2text2">{this.state.text2}</h2>
        </Draggable>
        <Draggable bounds="parent">
          <h2 className="h2text3">{this.state.text3}</h2>
        </Draggable>
        <Draggable bounds="parent">
          <h2 className="h2text4">{this.state.text4}</h2>
        </Draggable>

        <form>
          <input
            type="text"
            name="text1"
            value={this.state.text1}
            onChange={this.handleChange}
            placeholder="Type Here!"
          />
          <input
            type="text"
            name="text2"
            value={this.state.text2}
            onChange={this.handleChange}
            placeholder="Type Here!"
          />
          <input
            type="text"
            name="text3"
            value={this.state.text3}
            onChange={this.handleChange}
            placeholder="Type Here!"
          />
          <input
            type="text"
            name="text4"
            value={this.state.text4}
            onChange={this.handleChange}
            placeholder="Type Here!"
          />
          <p>You can drag the text over the image!</p>
        </form>
      </div>
    );
  }
}
