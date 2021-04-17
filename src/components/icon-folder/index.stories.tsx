import React from "react";
import { Meta, Story } from "@storybook/react";
import { decorator } from "@stories";
import IconFolder, { IconFolderComponentProps } from "./index";

export default {
  title: "Example/Elements/IconFolder",
  component: IconFolder,
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
} as Meta<IconFolderComponentProps>;

const Template: Story<IconFolderComponentProps> = (args) => (
  <IconFolder {...args} />
);

export const Default = Template.bind({});
