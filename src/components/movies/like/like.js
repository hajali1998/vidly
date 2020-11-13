import React, { Component } from "react";
const Like = (props) => {
 
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      onClick={props.cliked}
      className={classes}
      style={{ cursor: "pointer" }}
      area-hidden="true"
    ></i>
  );
}
 
export default Like;


