import React from "react";
import { Button } from "react-bootstrap";

const CustomButton = (props) => {
  return <Button variant="none" {...props}>{props.children}</Button>;
};

export default CustomButton;
