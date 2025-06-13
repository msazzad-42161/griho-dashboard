import { Meta, StoryObj } from "@storybook/react";
import { CustomTabs } from "./CustomTabs";

// Storybook metadata for CustomTabs
const meta: Meta<typeof CustomTabs> = {
  title: "Navigation/CustomTabs",
  component: CustomTabs,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample tabs data for the story
const tabsData = [
  {
    value: "overview",
    label: "ওভারভিউ",
    content: <div>Overview content goes here.</div>,
  },
  {
    value: "account",
    label: "অ্যাকাউন্ট সেটিং",
    content: <div>Account settings content goes here.</div>,
  },
  {
    value: "password",
    label: "পাসওয়ার্ড পরিবর্তন",
    content: <div>Password change content goes here.</div>,
  },
];

// Default story for CustomTabs
export const Default: Story = {
  args: {
    tabs: tabsData, // Pass the sample data to the CustomTabs component
  },
};