/*
 needs react
 an input element - title it username
*/
import React from "react";

const UserInput = (props) => {
  return (
    <div>
      <label htmlFor="text">Usrename: </label>
      <input type="text" onChange={props.changed} value={props.username} />
    </div>
  );
};

export default UserInput;
