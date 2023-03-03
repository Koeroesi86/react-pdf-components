import React from "react";
import { Meta, Story } from "@storybook/react";
import Document, { DocumentComponentProps } from "./index";

export default {
  title: "Example/Blocks/Document",
  component: Document,
  argTypes: {
    title: { control: "text" },
    author: { control: "text" },
    keywords: { control: "text" },
  },
} as Meta<typeof Document>;

// eslint-disable-next-line react/function-component-definition
const Template: Story<DocumentComponentProps> = (args) => (
  <Document {...args} />
);

export const Default = Template.bind({});
