import React from "react";
import { Document, Page, PDFViewer } from "@react-pdf/renderer";

export function PdfWrapper({
  width, height, children,
}: { width?: string; height?: string; children?: React.ReactElement }) {
  return (
    <PDFViewer
      style={{
        border: 0,
        width,
        height,
        position: "absolute",
        top: "0",
        left: "0",
        overflow: "hidden",
      }}
    >
      {children}
    </PDFViewer>
  );
}

PdfWrapper.defaultProps = {
  width: "100%", height: "100%", children: null
}

// eslint-disable-next-line react/function-component-definition
export const decorator = (
  pageSize: "A4" | "A5" | "A6" = "A5",
  width: string = "100%",
  height: string = "100%"
// eslint-disable-next-line react/function-component-definition
) => (Story) => (
  <PdfWrapper width={width} height={height}>
    <Document>
      <Page size={pageSize} orientation="landscape">
        <Story />
      </Page>
    </Document>
  </PdfWrapper>
);
