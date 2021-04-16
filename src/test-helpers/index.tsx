import { Document, Page } from "@react-pdf/renderer";
import React from "react";

// eslint-disable-next-line import/prefer-default-export,react/prop-types
export const Wrapper: React.FC = ({ children }) => (
  <Document>
    <Page>{children}</Page>
  </Document>
);
