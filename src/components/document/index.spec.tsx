import React from "react";
import { renderToString } from "@react-pdf/renderer";
import Document from "./index";

describe("<Document/>", () => {
  it("should render", async () => {
    const result = await renderToString(<Document/>);
    expect(result).toMatchSnapshot();
  });
});
