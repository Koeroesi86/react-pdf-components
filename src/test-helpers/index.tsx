import { Document, Page } from "@react-pdf/renderer";
import React from "react";

// eslint-disable-next-line import/prefer-default-export
export function Wrapper({ children }: { children?: React.ReactElement }) {
  return (
    <Document>
      <Page>{children}</Page>
    </Document>
  );
}

Wrapper.defaultProps = {
  children: null
}
