import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Button } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import { GlobalContext } from "../../context/GlobalState";

const useStyles = makeStyles({
  foot: {
    width: "300px",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    marginBottom: "30px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
  media: {
    height: 140,
  },
});

export default function CustomCard({ type, country }) {
  const classes = useStyles();
  const { addLikedCountry, likedCountry, removeLikedCountry } =
    useContext(GlobalContext);
  const savedcountry = likedCountry.find((c) => c.name === country.name);
  console.log(country);
  const savedisabled = savedcountry ? true : false;

  console.log(country.name);
  return (
    <Card className={classes.foot}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={country.flag}
          title={country.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {country.name}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
           
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button
          variant="contained"
          size="small"
          color="secondary"
          disabled={savedisabled}
          onClick={() => {
            addLikedCountry(country);
          }}
        >
          ADD
        </Button>

        <Button size="small" color="primary">
          Visited
        </Button> */}
        {/* <Control type="countrylist" /> */}
        {type === "countrylist" && (
          <>
            <Button
              variant="contained"
              size="small"
              color="secondary"
              disabled={savedisabled}
              onClick={() => {
                addLikedCountry(country);
              }}
            >
              ADD
            </Button>

            {/* <Button variant="contained" size="small" color="secondary">
              Visited
            </Button> */}
          </>
        )}
        {type === "saved" && (
          <>
            <Button
              variant="contained"
              size="small"
              color="secondary"
              onClick={() => {
                removeLikedCountry(country.name);
              }}
            >
              Remove
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
}
