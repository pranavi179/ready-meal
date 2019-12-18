import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import { Card } from "antd";

// const tabList = [
//   {
//     key: "tab1",
//     tab: "tab1"
//   },
//   {
//     key: "tab2",
//     tab: "tab2"
//   }
// ];

// const contentList = {
//   tab1: <p>content1</p>,
//   tab2: <p>content2</p>
// };

const tabListNoTitle = [
  {
    key: "BreakFast",
    tab: "BreakFast"
  },
  {
    key: "Lunch",
    tab: "Lunch"
  },
  {
    key: "Dinner",
    tab: "Dinner"
  }
];

const contentListNoTitle = {
  BreakFast: (
    <h1
      style={{
        fontSize: "34px",
        fontWeight: "bold",
        textAlign: "center",
        color: "#08979c"
      }}
    >
      BreakFast{" "}
    </h1>
  ),
  Lunch: (
    <h1
      style={{
        fontSize: "34px",
        fontWeight: "bold",
        textAlign: "center",
        color: "#08979c"
      }}
    >
      Lunch
    </h1>
  ),
  Dinner: (
    <h1
      style={{
        fontSize: "34px",
        fontWeight: "bold",
        textAlign: "center",
        color: "#08979c"
      }}
    >
      Dinner
    </h1>
  )
};

export default class Tab extends React.Component {
  state = {
    key: "tab1",
    noTitleKey: "BreakFast"
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <div>
        {/* <Card
          style={{ width: "100%" }}
          title="Card title"
          extra={<a href="/">More</a>}
          tabList={tabList}
          activeTabKey={this.state.key}
          onTabChange={key => {
            this.onTabChange(key, "key");
          }}
        >
          {contentList[this.state.key]}
        </Card> */}
        <br />
        <br />
        <Card
          style={{ width: "100%", borderColor: "white" }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          onTabChange={key => {
            this.onTabChange(key, "noTitleKey");
          }}
        >
          {/* tabBarExtraContent={<a href="/">More</a>} */}
          {contentListNoTitle[this.state.noTitleKey]}
        </Card>
      </div>
    );
  }
}
