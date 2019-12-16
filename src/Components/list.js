import React from "react";
import "./list.css";
import { Button, Card } from "@material-ui/core/";
import Meallist from "./meallist";
// import Button from "@material-ui/core/Button";

export default class List extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className="list">
            <h5>image : {this.props.image}</h5>

            <h5>TITLE:- {this.props.productName}</h5>
            <h5> ₹:{this.props.price}</h5>
            <h5>Restaurant Name : {this.props.streetName}</h5>
            <h5>Card:{this.props.card}</h5>
          </div>
          <div>
            <Button
              style={{
                height: "50px",
                backgroundColor: "purple",
                width: "200px"
              }}
            >
              GET MEAL DETAILS{" "}
            </Button>
          </div>
          <hr />
          {/* <Card.Body>
              <Card.Title>Mr&.MS{this.props.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <h5> ₹:{this.props.price}</h5>
              <h5>year : {this.props.year}</h5>
              <Button variant="primary">Golink to meal</Button>
            </Card.Body>
          </Card> */}
        </div>
      </div>
    );
  }
}
