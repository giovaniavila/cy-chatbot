import { Meta, StoryFn } from "@storybook/react";
import { AIChat } from "./index";
import { useState } from "react";

export default {
  title: "Component/AIchat",
  component: AIChat,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Template: StoryFn = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <AIChat />;
};

export const Default = Template.bind({});
Default.args = {};
