import React, { Component } from "react";
import "antd/dist/antd.css";
import "./list.css";
import { Card, Col, Row } from "antd";

import ImagesShown from "./images/Protein8a_retouch_2_xlarge.jpg";
import { Carousel } from "antd";
class Imageslide extends Component {
  render() {
    // let names = ["Protein8a_retouch_2_xlarge", "prawns", "chickenl", "group"];
    // let images = names.map(name => {
    //   <img
    //     key={name}
    //     src={require("./images/${name}.jpg")}
    //     alt=""
    //     className="img-responsive"
    //   />;
    // });
    return (
      <div>
        <Carousel autoplay>
          <div>
            <img src={ImagesShown} alt="not working" />
            {/*  <h1>4</h1> */}
            {/* </div>
          <div>
            <img src={chickenl} alt="not working" />

            {/* <h2>5</h2>{" "} */}
            {/* </div>
          <div>
            <img src={group} alt="not working" /> */}
            {/* <h3>f</h3>{" "} */}
            {/* </div>
          <div>
            <h1>fk</h1> */}
          </div>
        </Carousel>

        <div>
          <div style={{ background: "#ECECEC", padding: "10px" }}>
            <Row gutter={20}>
              <Col span={8}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
export default Imageslide;
