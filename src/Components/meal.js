import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderMenuItem({ dish }) {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

// Another way of implementing a functional component
const Menu = props => {
  const menu = props.dishes.dishes.map(dish => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} />
      </div>
    );
  });

  if (props.dishes.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  } else if (props.dishes.error) {
    return (
      <div className="container">
        <div className="row">
          <h5>{props.dishes.error}</h5>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className="row">{menu}</div>
      </div>
    );
  }
};
export default Menu;
