import React from "react";
import { Path, Svg } from "@react-pdf/renderer";
import { IconProps, IconPropTypes } from "@app-types";
import PropTypes from "prop-types";

export interface IconArrowRightComponentProps extends IconProps {
  children?: React.ReactElement;
}

function IconArrowRight({
  children, width, height, color,
}: IconArrowRightComponentProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 320 512"
      style={{ position: "relative", top: height / 4 }}
    >
      <Path
        fill={color}
        d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
      {children}
    </Svg>
  );
}

IconArrowRight.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node,
  ...IconPropTypes,
};

IconArrowRight.defaultProps = {
  width: 32,
  height: 32,
  color: "#000",
  children: null,
};

export default IconArrowRight;
