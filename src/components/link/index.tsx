import React from "react";
import { Link as L } from "@react-pdf/renderer";
import PropTypes from "prop-types";

export interface LinkComponentProps {
  src: string;
  color?: string;
  underline?: boolean;
  children?: React.ReactElement;
}

function Link({
  children, src, color, underline,
}: LinkComponentProps) {
  return (
    <L
      src={src}
      style={{ color, textDecoration: underline ? "underline" : "none" }}
    >
      {children}
    </L>
  );
}

Link.propTypes = {
  src: PropTypes.string.isRequired,
  color: PropTypes.string,
  underline: PropTypes.bool,
  children: PropTypes.node,
};

Link.defaultProps = {
  underline: true,
  color: "#000",
  children: null,
};

export default Link;
