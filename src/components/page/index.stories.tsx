import React from "react";
import { Meta, Story } from "@storybook/react";
import { PdfWrapper } from "@stories";
import { Document } from "@react-pdf/renderer";
import Page, { PageComponentProps } from "./index";

export default {
  title: "Example/Blocks/Page",
  component: Page,
  argTypes: {
    size: { type: "select", options: ["A4"] },
  },
  args: {
    size: "A4",
  },
} as Meta<typeof Page>;

// eslint-disable-next-line react/function-component-definition
const Template: Story<PageComponentProps> = (args) => (
  <PdfWrapper width="100%" height="100%">
    <Document>
      <Page {...args} />
    </Document>
  </PdfWrapper>
);

export const Default = Template.bind({});
