import React from "react";
import { Meta, Story } from "@storybook/react";
import { decorator } from "@stories";
import IconCheck, { IconCheckComponentProps } from "./index";

export default {
  title: "Example/Elements/IconCheck",
  component: IconCheck,
  decorators: [decorator("A6")],
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    color: { control: "color" },
  },
  args: {
    width: 12,
    height: 12,
    color: "#000",
  },
} as Meta<typeof IconCheck>;

// eslint-disable-next-line react/function-component-definition
const Template: Story<IconCheckComponentProps> = (args) => (
  <IconCheck {...args} />
);

export const Default = Template.bind({});
