import React, { Component } from "react";
import "../App.css";
import { Modal } from "@material-ui/core";
class planmodal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Modal>
          <h1>
            it is a modal for to display to select days/week subscription and
            submit(button){" "}
          </h1>
        </Modal>
      </div>
    );
  }
}

export default planmodal;
