import React from "react";
import propTypes from "prop-types";
import "./index.scss";

export default function Star({ className, value, height, width, spacing }) {
  const decimals = Number(value) % 1;
  const star = [];
  let leftPos = 0;

  for (let index = 0; index < 5 && index < value - decimals; index++) {
    leftPos = leftPos + width;
    star.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{
          width: width,
          height: height,
          left: index * width,
          marginRight: spacing
        }}
      ></div>
    );
  }

  if (decimals > 0 && value <= 5) {
    star.push(
      <div
        className="star"
        key={`starWithDecimals`}
        style={{
          left: leftPos,
          width: decimals * width - spacing,
          height: height,
        }}
      ></div>
    );
  }

  const starPlaceHolder = [];
  for (let index = 0; index < 5; index++) {
    starPlaceHolder.push(
      <div
        className="star placeholder"
        key={`starPlaceHolder-${index}`}
        style={{
          width: width,
          height: height,
          left: index * width,
          marginRight: spacing,
        }}
      ></div>
    );
  }

  return (
    <>
      <div
        className={["stars", className].join(" ")}
        style={{ height: height }}
      >
        {starPlaceHolder}
        {star}
      </div>
    </>
  );
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
  spacing: propTypes.number,
};
