import React from "react";
import { IconProps, IconPropTypes } from "@app-types";
import { Path, Svg } from "@react-pdf/renderer";
import PropTypes from "prop-types";

export interface IconFlowerComponentProps extends IconProps {
  children?: React.ReactElement;
}

function IconFlower({
  children, width, height, color,
}: IconFlowerComponentProps) {
  return (
    <Svg
      width={width}
      height={height}
      style={{ position: "relative", top: height / 4 }}
      viewBox="0 0 512 512"
    >
      <Path
        fill={color}
        d="M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96zm384-64c-84.2 0-157.4 46.5-195.7 115.2 27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32h-64z" />
      {children}
    </Svg>
  );
}

IconFlower.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node,
  ...IconPropTypes,
};

IconFlower.defaultProps = {
  width: 12,
  height: 12,
  color: "#000",
  children: null,
};

export default IconFlower;
