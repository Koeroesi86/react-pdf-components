import React from "react";
import { Path, Svg } from "@react-pdf/renderer";
import { IconProps, IconPropTypes } from "@app-types";
import PropTypes from "prop-types";

export interface IconBagComponentProps extends IconProps {
  children?: React.ReactElement;
}

function IconBag({
  children, width, height, color,
}: IconBagComponentProps) {
  return (
    <Svg
      width={width}
      height={height}
      style={{ position: "relative", top: height / 4 }}
      viewBox="0 0 512 512"
    >
      <Path
        fill={color}
        d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z" />
      {children}
    </Svg>
  );
}

IconBag.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node,
  ...IconPropTypes,
};

IconBag.defaultProps = {
  width: 12,
  height: 12,
  color: "#000",
  children: null,
};

export default IconBag;
