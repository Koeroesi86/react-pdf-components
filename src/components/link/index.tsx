import React from "react";
import { Link as L } from "@react-pdf/renderer";
import PropTypes from "prop-types";

export interface LinkComponentProps {
  src: string;
  color?: string;
  underline?: boolean;
}

const Link: React.FC<LinkComponentProps> = ({
  // eslint-disable-next-line react/prop-types
  children,
  src,
  color,
  underline,
}) => (
  <L
    src={src}
    // @ts-ignore
    style={{ color, textDecoration: underline ? "underline" : "unset" }}
  >
    {children}
  </L>
);

Link.propTypes = {
  src: PropTypes.string.isRequired,
  color: PropTypes.string,
  underline: PropTypes.bool,
};

Link.defaultProps = {
  underline: true,
  color: "#000",
};

export default Link;
