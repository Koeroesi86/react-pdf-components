import React from "react";
import { Document, Page, PDFViewer } from "@react-pdf/renderer";

// eslint-disable-next-line import/prefer-default-export
export const decorator = (
  pageSize: "A4" | "A5" | "A6" = "A5",
  width: string = "100%",
  height: string = "100%"
) => (Story) => (
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
    <Document>
      <Page size={pageSize} orientation="landscape">
        <Story />
      </Page>
    </Document>
  </PDFViewer>
);
