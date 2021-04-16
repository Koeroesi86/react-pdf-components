import React from "react";
import { renderToString } from "@react-pdf/renderer";
import Block from "./index";

describe("<Block/>", () => {
  it("should render", async () => {
    const result = await renderToString(<Block/>);
    expect(result).toMatchSnapshot();
  });
});
