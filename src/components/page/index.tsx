import React from "react";
import { Page as P } from "@react-pdf/renderer";
import PropTypes from "prop-types";
import { justifyContent as justifyContentImport, jc } from "@app-types";

export type PageSizes = "A4";

export interface PageComponentProps {
  size?: PageSizes;
  justifyContent?: jc;
  fontFamily?: string;
}

const Page: React.FC<PageComponentProps> = ({
  // eslint-disable-next-line react/prop-types
  children,
  size,
  justifyContent,
  fontFamily,
}) => (
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

Page.propTypes = {
  size: PropTypes.oneOf(["A4"]),
  justifyContent: PropTypes.oneOf(justifyContentImport),
  // eslint-disable-next-line react/require-default-props
  fontFamily: PropTypes.string,
};

Page.defaultProps = {
  size: "A4",
  justifyContent: "space-between",
};

export default Page;
