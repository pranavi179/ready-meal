import React from "react";
import "antd/dist/antd.css";
import ImagesShown from "./images/Protein8a_retouch_2_xlarge.jpg";
import "../index.css";
// import ImagesShown from "./images/chickenl.jpg";
import { List, Icon, Avatar, Card, Button, Rate } from "antd";
import Footerr from "./Footer";
import Tab from "./tab";

import Date from "./date";
const { Meta } = Card;

const list = [
  {
    id: 0,
    name: "Chicken Biryani",
    // image: "./images/chickenl.jpg",
    category: "mains",
    label: "Hot",
    price: "499",
    restaurant: "Paradise",
    featured: true,
    description:
      "A unique combination of Indian Uthappam (pancake) and Italian pizza."
  },
  {
    id: 1,
    name: "Prawns",
    image: "/assets/images/zucchipakoda.png",
    category: "appetizer",
    label: "",
    price: "799",
    restaurant: "Pakwaan",

    featured: false,
    description:
      "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"
  },
  {
    id: 2,
    name: "Fish",
    image: "/assets/images/vadonut.png",
    category: "appetizer",
    label: "New",
    price: "599",
    restaurant: " Bawarchi",

    featured: false,
    description:
      "A quintessential ConFusion experience, is it a vada or is it a donut?"
  },
  {
    id: 3,
    name: " Cake",
    image: "/assets/images/elaicheesecake.png",
    category: "dessert",
    label: "",
    price: "2+799",
    restaurant: "Paradise",

    featured: false,
    description:
      "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"
  }
];
// function Product() {

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 10, height: "10%" }} />
    {text}
  </span>
);

const Samplemeal = () =>
  list.map(item => (
    <Card>
      {" "}
      {/* key={item.id} */}
      {/* <div>{item.id}</div>
    <<div>{item.name}</Card> */}
      {/* <div>{item.name}</div> */}
      {/* <div>{item.category}</div>
      <div>{item.label}</div>
      <div>{item.image}</div>
     <div>{item.price}</div> 
      <div>{item.featured}</div>
     <div>{item.description}</div> */}
      {/* <Meta title={item.name} /> */}
      {/* avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        } */}
      {/* <div>{item.category}</div>
      <div>{item.label}</div>
      <div>{item.image}</div>
      <div>{item.price}</div>
      <div>{item.featured}</div>
      <div>{item.description}</div> */}
      <div>
        <Tab />
      </div>
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
        dataSource={list}
        renderItem={item => (
          <List.Item
            key={item.title}
            extra={<img width={450} alt="proteinimage" src={ImagesShown} />}
            actions={[
              <IconText
                type="star"
                theme="twoTone"
                twoToneColor="yellow"
                text="156"
                key="list-vertical-star-o"
              />,
              <Rate allowHalf defaultValue={2.5} />,
              <IconText type="like-o" text="156" key="list-vertical-like-o" />,
              <IconText type="message" text="2" key="list-vertical-message" />
            ]}
          >
            {/* src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" */}
            <List.Item.Meta
              title={
                <a
                  href={item.name}
                  style={{
                    fontSize: 24,
                    fontWeight: "Bold",
                    textAlign: "center",
                    color: "brown"
                  }}
                >
                  {" "}
                  {item.name}
                </a>
              }
            />
            {/* avatar={<Avatar src={item.avatar} />} */}
            <div
              style={{ fontSize: 20, textAlign: "left", fontWeight: "bold" }}
            >
              <div style={{ color: " brown " }}>
                Restaurant : {item.restaurant}
              </div>{" "}
              Price - {item.price}
              <br />
              {item.description}
              <div>
                <Date />
                <br />
              </div>
            </div>
            <div>
              <Button
                style={{
                  fontSize: 18,
                  height: "50px",
                  backgroundColor: "#13c2c2",
                  width: "200px"
                }}
              >
                <Icon type="shopping-cart" />
                Add
              </Button>
            </div>
            {item.content}
          </List.Item>
        )}
      />
    </Card>
  ));

export default Samplemeal;
