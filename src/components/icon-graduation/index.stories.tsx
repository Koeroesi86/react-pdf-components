import React from "react";
import { Meta, Story } from "@storybook/react";
import { decorator } from "@stories";
import IconGraduation, { IconGraduationComponentProps } from "./index";

export default {
  title: "Example/Elements/IconGraduation",
  component: IconGraduation,
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
} as Meta<typeof IconGraduation>;

// eslint-disable-next-line react/function-component-definition
const Template: Story<IconGraduationComponentProps> = (args) => (
  <IconGraduation {...args} />
);

export const Default = Template.bind({});
