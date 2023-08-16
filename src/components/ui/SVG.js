import React from "react";

const SVG = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox={`0 0 ${props.width} ${props.height}`}
      fill="none"
    >
      <path
        d="M86.9445 188.597C86.9445 325.802 -20.2708 437.029 -152.528 437.029C-284.785 437.029 -392 325.802 -392 188.597C-392 51.3913 -284.785 -59.8355 -152.528 -59.8355C-20.2708 -59.8355 86.9445 51.3913 86.9445 188.597Z"
        fill="#D5AEE4"
      />
      <path
        d="M786.307 222C745.907 153.2 769.474 13.3333 786.307 -48L1465.81 -149L1530.31 122.5L1491.81 723.5C1413.14 724.5 1237.71 717 1165.31 679C1074.81 631.5 1115.81 555 1040.81 515C965.807 475 1008.81 369.5 982.807 329.5C956.807 289.5 836.807 308 786.307 222Z"
        fill="#FFF1DA"
      />
    </svg>
  );
};

export default SVG;