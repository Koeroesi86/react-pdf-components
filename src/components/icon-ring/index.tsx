import React from "react";
import { IconProps, IconPropTypes } from "@app-types";
import { Svg, Circle as C } from "@react-pdf/renderer";

export type IconRingComponentProps = IconProps;

const IconRing: React.FC<IconRingComponentProps> = ({
  children,
  width,
  height,
  color,
}) => (
  <Svg viewBox="0 0 100 100" width={width} height={height}>
    <C cx="50" cy="50" r="40" stroke={color || "#000"} strokeWidth="15" />
    {children}
  </Svg>
);

IconRing.propTypes = { ...IconPropTypes };

IconRing.defaultProps = {
  width: 12,
  height: 12,
  color: "#000",
};

export default IconRing;
