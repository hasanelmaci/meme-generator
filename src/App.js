import React from "react";
import Header from "./Header";
import GetPics from "./GetPics";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <GetPics />
      </div>
    );
  }
}

export default App;
