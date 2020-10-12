import React from "react";

const Heart = (props) => {
  let classes = "clickable fa fa-heart";
  if (!props.liked) classes += "-o";

  return (
    <i
      onClick={props.onClick}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Heart;
