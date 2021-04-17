import React from "react";
import { renderToString } from "@react-pdf/renderer";
import { Wrapper } from "@test-helpers";
import Link from "./index";

describe("<Link/>", () => {
  it("should render", async () => {
    const result = await renderToString(
      <Wrapper>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link src="https://example.com"/>
      </Wrapper>
    );
    expect(result).toMatchSnapshot();
  });
});
