import React from "react";
import { IconProps, IconPropTypes } from "@app-types";
import { Path, Svg } from "@react-pdf/renderer";
import PropTypes from "prop-types";

export interface IconInfoComponentProps extends IconProps {
  children?: React.ReactElement;
}

function IconInfo({
  children, width, height, color,
}: IconInfoComponentProps) {
  return (
    <Svg
      width={width}
      height={height}
      style={{ position: "relative", top: height / 4 }}
      viewBox="0 0 512 512"
    >
      <Path
        fill={color || "currentColor"}
        d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" />
      {children}
    </Svg>
  );
}

IconInfo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node,
  ...IconPropTypes,
};

IconInfo.defaultProps = {
  width: 12,
  height: 12,
  color: "#000",
  children: null,
};

export default IconInfo;
