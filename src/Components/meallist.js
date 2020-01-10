import React from "react";
import faker from "faker";
import List from "./list";

//  import { Button, Card } from "react-bootstrap";

let data = [];
for (let i = 0; i < 25; i++) {
  data.push({
    id: i,
    productName: faker.commerce.productName(),
    price: faker.random.number({ min: 1500, max: 20000 }),
    // year: faker.random.number({ min: 1960, max: 2017 }),
    image: faker.image.food(),
    streetName: faker.address.streetName(),
    card: faker.helpers.createCard(),
    rating: 0
  });
}

export default class Meallist extends React.Component {
  render() {
    return (
      <div>
        {data.map(object => (
          <List
            image={object.image}
            name={object.name}
            price={object.price}
            year={object.year}
          />
        ))}
      </div>
    );
  }
}
