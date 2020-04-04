/**
 *  needs react
 * needs UserInput
 * two paragraphs
 */

import React from "react";
import Intput from "../UserInput/UserInput";

const UserOutput = (props) => {
  return (
    <div>
      <p>username: {props.userName}</p>
    </div>
  );
};

export default UserOutput;
