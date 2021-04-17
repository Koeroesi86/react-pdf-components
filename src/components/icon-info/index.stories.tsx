import React from "react";
import { Meta, Story } from "@storybook/react";
import { decorator } from "@stories";
import IconInfo, { IconInfoComponentProps } from "./index";

export default {
  title: "Example/Elements/IconInfo",
  component: IconInfo,
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
} as Meta<IconInfoComponentProps>;

const Template: Story<IconInfoComponentProps> = (args) => (
  <IconInfo {...args} />
);

export const Default = Template.bind({});
