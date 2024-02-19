import React, { Component } from "react";

class Icon extends Component {
  static defaultProps = {
    options: [
      "angry",
      "anchor",
      "archive",
      "at",
      "baby",
      "archway",
      "bell",
      "bone",
      "bout",
      "car",
      "city",
      "cloud",
      "couch",
    ],
  };
  constructor(props) {
    super(props);
    this.state = { icons: ["bone", "cloud"] };
    this.addIcon = this.addIcon.bind(this);
  }
  addIcon() {
    const randIcon =
      this.props.options[Math.floor(Math.random() * this.props.options.length)];
    this.setState({ icons: [...this.state.icons, randIcon] });
  }
  render() {
    const icons = this.state.icons.map((i) => <i className={`fas fa-${i}`} />);
    return (
      <div>
        <h1>Icons: {icons}</h1>
        <button onClick={this.addIcon}>Add Icon</button>
      </div>
    );
  }
}

export default Icon;
