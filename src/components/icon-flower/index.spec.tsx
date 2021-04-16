import React from "react";
import { renderToString } from "@react-pdf/renderer";
import { Wrapper } from "@test-helpers";
import IconFlower from "./index";

describe("<IconFlower/>", () => {
  it("should render", async () => {
    const result = await renderToString(
      <Wrapper>
        <IconFlower width={12} height={12} color="#000"/>
      </Wrapper>
    );
    expect(result).toMatchSnapshot();
  });
});
