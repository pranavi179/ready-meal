import React from "react";
import ReactDOM from "react-dom";
import SignInForm from "./signinform";
import { Carousel } from "antd";
import "./modal.css";

import { Modal, Button } from "antd";
import SignUpForm from "./signupform";

class Planmodal extends React.Component {
  state = {
    modal1Visible: false,
    modal2Visible: false
  };

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  render() {
    return (
      <div>
        <Carousel autoplay>
          <Button
            type="primary"
            style={{ height: " 80px", width: "100%" }}
            onClick={() => this.setModal1Visible(true)}
          >
            Login here
          </Button>
          <div>
            <Modal
              title="Login"
              style={{ top: 20, fontSize: "30px" }}
              visible={this.state.modal1Visible}
              onOk={() => this.setModal1Visible(false)}
              onCancel={() => this.setModal1Visible(false)}
            >
              <SignInForm />
            </Modal>
          </div>
          <div>
            <Button
              type="primary"
              style={{ height: " 80px", width: "100%" }}
              onClick={() => this.setModal2Visible(true)}
            >
              Register
            </Button>
            <Modal
              title="Register Here "
              centered
              visible={this.state.modal2Visible}
              onOk={() => this.setModal2Visible(false)}
              onCancel={() => this.setModal2Visible(false)}
            >
              <SignUpForm />
            </Modal>
            <br />
            <br />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Planmodal;
