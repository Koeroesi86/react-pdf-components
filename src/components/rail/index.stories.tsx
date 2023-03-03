import React from "react";
import { Meta, Story } from "@storybook/react";
import { decorator } from "@stories";
import Rail, { RailComponentProps } from "./index";

export default {
  title: "Example/Elements/Rail",
  component: Rail,
  decorators: [decorator("A6")],
  argTypes: {
    iconSize: { control: "number" },
    color: { control: "color" },
    size: { control: "number" },
    startSize: { control: "number" },
    endSize: { control: "number" },
    orientation: { type: "select", options: ["row", "column"] },
  },
  args: {
    iconSize: 10,
    color: "#000",
    size: 40,
    startSize: 40,
    endSize: 40,
    orientation: "column",
  },
} as Meta<typeof Rail>;

// eslint-disable-next-line react/function-component-definition
const Template: Story<RailComponentProps> = (args) => <Rail {...args} />;

export const Default = Template.bind({});
