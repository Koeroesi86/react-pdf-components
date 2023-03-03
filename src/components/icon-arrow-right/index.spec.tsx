import React from "react";
import { renderToString } from "@react-pdf/renderer";
import { Wrapper } from "@test-helpers";
import IconArrowRight from "./index";

describe("<IconArrowRight/>", () => {
  it("should render", async () => {
    const result = await renderToString(
      <Wrapper>
        <IconArrowRight width={12} height={12} color="#000"/>
      </Wrapper>
    );
    expect(result).toMatchSnapshot();
  });
});
