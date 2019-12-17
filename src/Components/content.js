import React, { Component } from "react";
import "antd/dist/antd.css";
import "./list.css";
import { Card, Col, Row } from "antd";

import ImagesShown from "./images/Protein8a_retouch_2_xlarge.jpg";
import ImagesShown1 from "./images/prawns.jpg";
import ImagesShown2 from "./images/chickenl.jpg";
import ImagesShown3 from "./images/group.jpg";
import { Carousel } from "antd";
import ProductList from "./demo";

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
            <img
              src={ImagesShown}
              alt="not working"
              style={{ width: " 100%", height: "600px" }}
            />
          </div>
          {/* <div>
            <img
              src={ImagesShown1}
              alt="not working"
              style={{ width: " 100%", height: "400px" }}
            />
          </div>
          <div>
            <img src={ImagesShown2} alt="not working" />
          </div>
          <div>
            <img src={ImagesShown3} alt="not working" />
          </div> */}
        </Carousel>

        <div>
          {/* <div style={{ background: "#ECECEC", padding: "10px" }}>
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
          </div> */}
        </div>
        <ProductList />
      </div>
    );
  }
}
export default Imageslide;
