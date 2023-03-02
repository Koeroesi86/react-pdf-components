import React from "react";
import { Text as ReactPDFText } from "@react-pdf/renderer";
import PropTypes from "prop-types";

export interface TextComponentProps {
  text: string;
  color: string;
  size?: number;
  weight?: number;
  lineHeight?: number;
  underline?: boolean;
  align?: "left" | "center" | "right";
  children?: React.ReactElement;
}

function Text({
  children, color, size, lineHeight, weight, align, text, underline
}: TextComponentProps) {
  return (
    <ReactPDFText
      style={{
        color,
        fontSize: size,
        fontWeight: weight,
        textAlign: align,
        lineHeight,
        textOverflow: "ellipsis",
        textDecoration: underline ? 'underline' : undefined,
      }}
      hyphenationCallback={(a) => [a]}
    >
      {text || null}
      {children}
    </ReactPDFText>
  );
}

Text.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  weight: PropTypes.number,
  lineHeight: PropTypes.number,
  align: PropTypes.oneOf(["left", "center", "right"]),
  underline: PropTypes.bool,
  children: PropTypes.node,
};

Text.defaultProps = {
  text: "",
  color: "#000",
  size: 12,
  align: "left",
  weight: 400,
  lineHeight: 1,
  underline: false,
  children: null,
};

export default Text;
