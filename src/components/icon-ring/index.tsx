import React from "react";
import { IconProps, IconPropTypes } from "@app-types";
import { Svg, Circle as C } from "@react-pdf/renderer";
import PropTypes from "prop-types";

export interface IconRingComponentProps extends IconProps {
  children?: React.ReactElement;
}

function IconRing({
  children, width, height, color,
}: IconRingComponentProps) {
  return (
    <Svg viewBox="0 0 100 100" width={width} height={height}>
      <C cx="50" cy="50" r="40" stroke={color || "#000"} strokeWidth="15" />
      {children}
    </Svg>
  );
}

IconRing.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node,
  ...IconPropTypes,
};

IconRing.defaultProps = {
  width: 12,
  height: 12,
  color: "#000",
  children: null,
};

export default IconRing;
