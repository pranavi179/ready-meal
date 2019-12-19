import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

const products = [
  {
    id: 0,
    name: "Chicken Biryani",
    // image: "./images/chickenl.jpg",
    category: "mains",
    label: "Hot",
    price: "499",
    restaurant: "Paradise",
    featured: true,
    desc: "A unique combination of Indian Uthappam (pancake) and Italian pizza."
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
    desc:
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
    desc:
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
    desc:
      "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"
  }
];
const addresses = ["T-hub", "Gachibowli", "Hyderabad", "Telangana"];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Suresh" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" }
];

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0)
  },
  total: {
    fontWeight: "700"
  },
  title: {
    marginTop: theme.spacing(2)
  }
}));

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map(product => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            3495
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>Suresh</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map(payment => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
