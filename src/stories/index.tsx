import React, { useEffect, useState } from "react";
import { Document, Page, PDFViewer } from "@react-pdf/renderer";

// eslint-disable-next-line import/prefer-default-export
export const decorator = (Story) => (
  <PDFViewer style={{ border: 0, width: "100%" }}>
    <Document>
      <Page size="A5" orientation="landscape">
        <Story />
      </Page>
    </Document>
  </PDFViewer>
);
