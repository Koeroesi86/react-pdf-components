import React from "react";
import { renderToString, Document } from "@react-pdf/renderer";
import Page from "./index";

describe("<Page/>", () => {
  it("should render", async () => {
    const result = await renderToString(
      <Document>
        <Page/>
      </Document>
    );
    expect(result).toMatchSnapshot();
  });
});
