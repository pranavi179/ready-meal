import React from "react";
import "antd/dist/antd.css";
import ImagesShown from "./images/Protein8a_retouch_2_xlarge.jpg";
import "../index.css";
import { Link } from "react-router-dom";

import { List, Avatar, Icon, Button } from "antd";

function ProductList() {
  const listData = [];
  for (let i = 0; i < 23; i++) {
    listData.push({
      href: "./samplemeal",
      title: `Meal Name ${i}`,
      // avatar:
      // "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",

      description: "Description of meal.",
      content:
        "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
    });
  }

  const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );
  return (
    <div>
      {" "}
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3
        }}
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3
        }}
        dataSource={listData}
        footer={
          <div>
            <Link to="/samplemeal" style={{ fontSize: "20px" }}>
              For more .....
            </Link>
          </div>
        }
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText type="star-o" text="156" key="list-vertical-star-o" />,
              <IconText type="like-o" text="156" key="list-vertical-like-o" />,
              <IconText type="message" text="2" key="list-vertical-message" />
            ]}
            extra={<img width={272} alt="logo" src={ImagesShown} />}
          >
            {/* src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" */}
            <List.Item.Meta
              title={
                <a
                  href={item.href}
                  style={{ fontWeight: "bold", height: "20px" }}
                >
                  {item.title}
                </a>
              }
              description={item.description}
              style={{ fontWeight: "bold", fontSize: "20px" }}
            />
            {/* avatar={<Avatar src={item.avatar} />} */}
            {item.content}
            <Button
              style={{
                fontSize: 18,
                height: "50px",
                backgroundColor: "#13c2c2",
                width: "100px"
              }}
            >
              <Icon type="shopping-cart" />
              Add
            </Button>{" "}
          </List.Item>
        )}
      />
    </div>
  );
}

export default ProductList;
