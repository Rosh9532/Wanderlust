import { Button } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import CustomCard from "../../components/Card";
import { GlobalContext } from "../../context/GlobalState";
// import { Control } from "../../components/Controls";
import { Navbar } from "../../components/Navbar";
import { AuthContext } from "../../context/auth/Authstate";
/**
 * @author
 * @function Saved
 **/

export const Saved = (props) => {
  const { likedCountry } = useContext(GlobalContext);
  const { isAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    if (!isAuthenticated) {
      props.history.push("/signin");
    }
  }, [props.history, isAuthenticated]);
  return (
    <>
      <Navbar />
      <div
        style={{
          marginTop: "100px",
          marginLeft: "100px",
          marginRight: "100px",
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          // display: "flex",
          //   flex: "1 1 80px",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   flexWrap: "wrap",
        }}
      >
        {likedCountry.length > 0 ? (
          likedCountry.map((country) => {
            return (
              <div style={{ width: "300px", marginRight: "2px" }}>
                <CustomCard country={country} type="saved"></CustomCard>
              </div>
            );
          })
        ) : (
          <div>
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              No saved holiday lists ..Explore the countries and add to ur
              holiday
            </h1>
          </div>
        )}
      </div>
    </>
  );
};
