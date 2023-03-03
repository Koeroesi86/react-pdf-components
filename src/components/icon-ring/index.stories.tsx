import React from "react";
import { Meta, Story } from "@storybook/react";
import { decorator } from "@stories";
import IconRing, { IconRingComponentProps } from "./index";

export default {
  title: "Example/Elements/IconRing",
  component: IconRing,
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
} as Meta<typeof IconRing>;

// eslint-disable-next-line react/function-component-definition
const Template: Story<IconRingComponentProps> = (args) => (
  <IconRing {...args} />
);

export const Default = Template.bind({});
