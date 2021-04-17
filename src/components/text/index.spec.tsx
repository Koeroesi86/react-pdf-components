import React from "react";
import { renderToString } from "@react-pdf/renderer";
import { Wrapper } from "@test-helpers";
import Text from "./index";

describe("<Text/>", () => {
  it("should render", async () => {
    const result = await renderToString(
      <Wrapper>
        <Text text="example text" color="#000"/>
      </Wrapper>
    );
    expect(result).toMatchSnapshot();
  });
});
