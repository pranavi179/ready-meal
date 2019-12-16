import React from "react";
import { Layout, Menu, Breadcrumb, Icon, Row, Col } from "antd";

import { Switch, Route, Link } from "react-router-dom";
import MovieList from "./movielist";
import MovieDetails from "./MovieDetails";
import WatchList from "./watchlist";
import MDetails from "./MDetails";
import Movie from "./Movie";
// import movies from "./Mlist";
import Default from "./Default";
import IMDb from "./images/IMDb.png";
// import MList from "./Mlist";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default class View extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // movies:movies.slice(0, 12),
      // movies,
      current: "mail"
    };
  }

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    console.log(this.state);
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            onClick={this.handleClick}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
            selectedKeys={[this.state.current]}
          >
            <Menu.Item key="mail"></Menu.Item>

            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                  {/* <Icon type="home" /> */}
                  <img src={IMDb} className="App-logo" alt="logo" />i
                </span>
              }
            >
              <Menu.ItemGroup title="History">
                <Menu.Item key="setting:3">
                  <a
                    href="https://ant.design"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    Historical Movies{" "}
                  </a>
                </Menu.Item>
                <Menu.Item key="setting:4">
                  <a
                    href="https://ant.design"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    Science -fiction{" "}
                  </a>
                </Menu.Item>
              </Menu.ItemGroup>
              {/* </SubMenu> */}

              <Menu.ItemGroup title="Sign In /Signup">
                <Menu.Item key="setting:1">
                  <Link to="/movielist">MovieList</Link>
                  Sign In
                </Menu.Item>
                <Menu.Item key="setting:2">
                  {" "}
                  <a href="/signup" target="_self" rel="noopener noreferrer">
                    Sign Up{" "}
                  </a>{" "}
                  Sign Up
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="2">
              {" "}
              <a href="/movielist" target="_self" rel="noopener noreferrer">
                Movies{" "}
              </a>
            </Menu.Item>

            <Menu.Item key="2">
              {" "}
              <Link to="/movielist">Movies List </Link>
            </Menu.Item>
            <Menu.Item key="2">
              {" "}
              <a href="/MovieDetails" target="_self" rel="noopener noreferrer">
                Movie Details
              </a>{" "}
            </Menu.Item>
            <Menu.Item key="3">
              {" "}
              <a href="/MovieDetails" target="_self" rel="noopener noreferrer">
                Celebs
              </a>
            </Menu.Item>
            <Menu.Item key="3">
              {" "}
              <a href="/MDetails" target="_self" rel="noopener noreferrer">
                MDetails
              </a>
            </Menu.Item>
            <Menu.Item key="2">
              {" "}
              <a href="/watchlist" target="_self" rel="noopener noreferrer">
                Watchlist
              </a>
            </Menu.Item>
            <Menu.Item key="2">
              {" "}
              <a href="/Mlist" target="_self" rel="noopener noreferrer">
                Movie
              </a>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>MovieList</Breadcrumb.Item>
            <Breadcrumb.Item>Movie</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: "24px 0", background: "#fff" }}>
            <Sider width={200} style={{ background: "#fff", float: "right" }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      Hollywood
                    </span>
                  }
                >
                  <Menu.Item key="1">option1</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="laptop" />
                      Bollywood
                    </span>
                  }
                >
                  <Menu.Item key="5">option5</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="notification" />
                      Tollywood
                    </span>
                  }
                >
                  <Menu.Item key="9">option9</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", Height: 280 }}>
              {/* <Grid id ="content"> */}
              <Row>
                <Col span={12}>
                  {" "}
                  {/* <MList movies={this.state.movies} /> */}i want the grid
                </Col>
              </Row>
              {/* <MList 
                  movie = { this.state.movie} />
              </Grid> */}
              <Switch>
                <Route exact path="/movielist" component={MovieList} />
                <Route exact path="/movieDetails" component={MovieDetails} />
                <Route exact path="/MDetails" component={MDetails} />
                <Route exact path="/Movie" component={Movie} />
                <Route exact path="/watchlist" component={WatchList} />
                {this.props.isLoggedIn ? (
                  <button>signout</button>
                ) : (
                  <li>
                    <Link to="/signin">Signin</Link>
                  </li>
                )}

                <Route component={Default} />
              </Switch>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>ITs a footer</Footer>
      </Layout>
    );
  }
}
