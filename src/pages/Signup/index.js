import ParticlesBg from "particles-bg";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth/Authstate";
import SignUp from "./Signup";
import "./style.css";

/**
 * @author
 * @function MSignup
 **/

export const MSignup = (props) => {
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/home");
    }
  }, [props.history, isAuthenticated]);
  return (
    <div>
      <SignUp />
      {/* <ParticlesBg type="circle" bg={true} /> */}
    </div>
  );
};
