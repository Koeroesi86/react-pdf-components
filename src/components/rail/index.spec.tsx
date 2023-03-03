import React from "react";
import { renderToString } from "@react-pdf/renderer";
import { Wrapper } from "@test-helpers";
import Rail from "./index";

describe("<Rail/>", () => {
  it("should render", async () => {
    const result = await renderToString(
      <Wrapper>
        <Rail />
      </Wrapper>
    );
    expect(result).toMatchSnapshot();
  });
});
