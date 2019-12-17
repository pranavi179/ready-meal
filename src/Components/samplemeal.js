import React from "react";
import "antd/dist/antd.css";
import ImagesShown from "./images/Protein8a_retouch_2_xlarge.jpg";
import "../index.css";
// import ImagesShown from "./images/chickenl.jpg";
import { List, Icon, Avatar, Card, Button } from "antd";
import Date from "./date";
const { Meta } = Card;

const list = [
  {
    id: 0,
    name: "Chicken Biryani",
    // image: "./images/chickenl.jpg",
    category: "mains",
    label: "Hot",
    price: "4.99",

    featured: true,
    description:
      "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."
  },
  {
    id: 1,
    name: "Prawns",
    image: "/assets/images/zucchipakoda.png",
    category: "appetizer",
    label: "",
    price: "1.99",
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
    price: "1.99",
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
    price: "2.99",
    featured: false,
    description:
      "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"
  }
];
// function Product() {
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8, height: "10%" }} />
    {text}
  </span>
);
const ComplexList = () =>
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
            actions={[
              <IconText type="star-o" text="156" key="list-vertical-star-o" />,
              <IconText type="like-o" text="156" key="list-vertical-like-o" />,
              <IconText type="message" text="2" key="list-vertical-message" />
            ]}
            extra={<img width={400} alt="logo" src={ImagesShown} />}
          >
            {/* src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" */}
            <List.Item.Meta
              title={<a href={item.name}>{item.name}</a>}
              description={item.description}
            />
            {/* avatar={<Avatar src={item.avatar} />} */}
            <div>
              <h3>Select the Date and time </h3>
              <Date />
            </div>
            <div>
              <Button marginRight="10">Add to Cart</Button>
            </div>
            {item.content}
          </List.Item>
        )}
      />
    </Card>
  ));

export default ComplexList;
