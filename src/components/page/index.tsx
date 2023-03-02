import React from "react";
import { Page as P } from "@react-pdf/renderer";
import PropTypes from "prop-types";
import { justifyContent as justifyContentImport, jc } from "@app-types";

export type PageSizes = "A4";

export interface PageComponentProps {
  size?: PageSizes;
  justifyContent?: jc;
  fontFamily?: string;
  children?: React.ReactElement;
}

function Page({
  children, size, justifyContent, fontFamily,
}: PageComponentProps) {
  return (
    <P
      size={size}
      style={{
        flexDirection: "column",
        justifyContent,
        backgroundColor: "#ffffff",
        fontFamily,
        paddingLeft: 40,
        paddingRight: 40,
      }}
    >
      {children}
    </P>
  );
}

Page.propTypes = {
  size: PropTypes.oneOf(["A4"]),
  justifyContent: PropTypes.oneOf(justifyContentImport),
  fontFamily: PropTypes.string,
  children: PropTypes.node,
};

Page.defaultProps = {
  size: "A4",
  justifyContent: "space-between",
  fontFamily: 'inherit',
  children: null,
};

export default Page;
