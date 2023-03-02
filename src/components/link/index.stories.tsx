import React from "react";
import { Text } from "@react-pdf/renderer";
import { Meta, Story } from "@storybook/react";
import { decorator } from "@stories";
import Link, { LinkComponentProps } from "./index";

export default {
  title: "Example/Blocks/Link",
  component: Link,
  decorators: [decorator("A6")],
  argTypes: {
    src: { control: "text" },
    color: { control: "color" },
    underline: { control: "boolean" },
  },
  args: {
    src: "https://example.com",
    color: "#000",
    underline: false,
  },
} as Meta<typeof Link>;

// eslint-disable-next-line react/function-component-definition
const Template: Story<LinkComponentProps> = (args) => (
  <Link {...args}>
    <Text>test</Text>
  </Link>
);

export const Default = Template.bind({});
