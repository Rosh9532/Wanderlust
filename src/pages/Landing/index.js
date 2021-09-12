import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import data from "../../data/data.json";
import { Button } from "@material-ui/core";
import { Navbar } from "../../components/Navbar";
/**
 * @author
 * @function Landing
 **/

export const Landing = (props) => {
  return (
    <header id="header">
      <Navbar />
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {data.Header ? data.Header.title : "Loading"}
                  <span></span>
                </h1>
                <p>{data.Header ? data.Header.paragraph : "Loading"}</p>
                <Link to="/home">
                  <Button variant="contained" color="primary">
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
