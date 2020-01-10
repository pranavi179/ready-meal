import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import "./list.css";
import "antd/dist/antd.css";
import Imageslide from "./content";
import Samplemeal from "./samplemeal";
import SignInForm from "../component/signinform";
import SignUpForm from "../component/signupform";
import Planmodal from "../component/planmodal";
import Logo from "./images/menuicon.jpg";
import { Link, Switch, Route } from "react-router-dom";
const { SubMenu } = Menu;

const { Header, Content, Footer, Sider } = Layout;
function Footerr() {
  return (
    <Layout>
      <Header className="header">
        {/* <div className="logo" /> */}

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item
            to="/"
            key="2"
            style={{ fontSize: "36px", fontWeight: "bold" }}
          >
            <Link to="/">Hygge</Link>
          </Menu.Item>
          <Menu.Item key="1">
            <Link to="/"></Link>HOME
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/samplemeal"> MEALS</Link>
          </Menu.Item>
          <Menu.Item key="3">HOME FOOD</Menu.Item>
          <Menu.Item key="4">DIET</Menu.Item>
          <Menu.Item key="5">
            <Link to="/planmodal">LOGIN/SIGNUP </Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/all">CART</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "100 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Meal List</Breadcrumb.Item>
          {/* <Breadcrumb.Item></Breadcrumb.Item> */}
        </Breadcrumb>
        <Layout
          style={{ padding: "24px 0", background: "#fff", minHeight: 500 }}
        >
          <Sider width={200} style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="smile" theme="twoTone" /> MEALS
                  </span>
                }
              >
                <Menu.Item key="1">BREAKFAST</Menu.Item>
                <Menu.Item key="2">lUNCH</Menu.Item>
                <Menu.Item key="3">SNACKS</Menu.Item>
                <Menu.Item key="4">DINNER</Menu.Item>
                <Menu.Item key="1">DIET</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="home" theme="twoTone" /> HOME FOOD
                  </span>
                }
              >
                <Menu.Item key="5">BREAKFAST</Menu.Item>
                <Menu.Item key="6">lUNCH</Menu.Item>
                <Menu.Item key="7">SNACKS</Menu.Item>
                <Menu.Item key="8">DINNER</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="clock-circle" theme="twoTone" /> ON DIET
                  </span>
                }
              >
                <Menu.Item key="9">BREAKFAST</Menu.Item>
                <Menu.Item key="10">lUNCH</Menu.Item>
                <Menu.Item key="11">SNACKS</Menu.Item>
                <Menu.Item key="12">DINNER</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 720 }}>
            {/* <Imageslide /> */}
            <Switch>
              <Route exact path="/" component={Imageslide} />
              <Route exact path="/samplemeal" component={Samplemeal} />
              <Route exact path="/planmodal" component={Planmodal} />
              <Route exact path="/Signinform" component={SignInForm} />
              <Route exact path="/signupform" component={SignUpForm} />
            </Switch>
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          textDecorationColor: "#13c2c2",
          height: "20px",
          fontWeight: "bold",
          fontSize: "35px"
        }}
      >
        Created By HYGGE TEAM
      </Footer>
    </Layout>
  );
}

export default Footerr;
