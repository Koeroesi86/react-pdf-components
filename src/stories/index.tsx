/* eslint-disable react/prop-types */
import React from "react";
import { Document, Page, PDFViewer } from "@react-pdf/renderer";

export const PdfWrapper: React.FC<{ width: string; height: string }> = ({
  width = "100%",
  height = "100%",
  children,
}) => (
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
    {/* @ts-ignore */}
    {children}
  </PDFViewer>
);

export const decorator = (
  pageSize: "A4" | "A5" | "A6" = "A5",
  width: string = "100%",
  height: string = "100%"
) => (Story) => (
  <PdfWrapper width={width} height={height}>
    <Document>
      <Page size={pageSize} orientation="landscape">
        <Story />
      </Page>
    </Document>
  </PdfWrapper>
);
