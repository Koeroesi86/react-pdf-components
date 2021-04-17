import React from "react";
import { Meta, Story } from "@storybook/react";
import { decorator } from "@stories";
import IconGithub, { IconGithubComponentProps } from "./index";

export default {
  title: "Example/Elements/IconGithub",
  component: IconGithub,
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
} as Meta<IconGithubComponentProps>;

const Template: Story<IconGithubComponentProps> = (args) => (
  <IconGithub {...args} />
);

export const Default = Template.bind({});
