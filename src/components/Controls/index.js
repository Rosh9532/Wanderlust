import { Button } from "@material-ui/core";
import React from "react";

/**
 * @author
 * @function Control
 **/

export const Control = (props, type) => {
  return (
    <div>
      {
        (type = "countrylist" && (
          <>
            <Button
              variant="contained"
              size="small"
              color="secondary"
              //   disabled={savedisabled}
              //   onClick={() => {
              //     addLikedCountry(country);
              //   }}
            >
              ADD
            </Button>

            <Button size="small" color="primary">
              Visited
            </Button>
          </>
        ))
      }
      {
        (type = "saved" && (
          <>
            <Button size="small" color="primary">
              Remove
            </Button>
          </>
        ))
      }
    </div>
  );
};
