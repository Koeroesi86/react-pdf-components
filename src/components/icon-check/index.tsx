import React from "react";
import { Path, Svg } from "@react-pdf/renderer";
import { IconProps, IconPropTypes } from "@app-types";

export type IconCheckComponentProps = IconProps;

const IconCheck: React.FC<IconCheckComponentProps> = ({
  children,
  width,
  height,
  color,
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 512 512"
    style={{ position: "relative", top: height / 4 }}
  >
    <Path
      fill={color || "#000"}
      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
    />
    {children}
  </Svg>
);

IconCheck.propTypes = { ...IconPropTypes };

IconCheck.defaultProps = {
  width: 12,
  height: 12,
  color: "#000",
};

export default IconCheck;
