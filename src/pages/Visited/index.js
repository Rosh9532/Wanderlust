import React from "react";
import { Navbar } from "../../components/Navbar";

/**
 * @author
 * @function Visited
 **/

export const Visited = (country) => {
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
        }}
      >
        {" "}
        Your Visited Countries will appear over here
      </div>
      ;
    </>
  );
};
