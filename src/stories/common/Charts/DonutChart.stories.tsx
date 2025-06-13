import { Meta, StoryObj } from '@storybook/react';
import { DonutChart, DonutChartProps } from './DonutChart';

// Storybook metadata for DonutChart
const meta: Meta<typeof DonutChart> = {
  title: 'Common/Charts/DonutChart',
  component: DonutChart,
  tags: ['autodocs'],
  argTypes: {
    headerText: { control: 'text'},
    activeIndex: { control: 'number' }, // Add control for activeIndex
    innerRadius:{control:'number'}, //inner radius
    donutWidth: {control:'number'}, // Difference between inner and outer radius
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for the chart
const data = [
  { name: 'Unit limit', value: 55, fill: '#FF4081' },  // Pink
  { name: 'Unit used', value: 33, fill: '#5C3AFF' },   // Blue
  { name: 'Unit remain', value: 12, fill: '#FFC107' }, // Yellow
];

// Default story for DonutChart
export const Default: Story = {
  args: {
    data, // Passing the chart data
    headerText: 'আপনি ব্যবহার করেছেন 1 of 100 ফ্ল্যাট',
    activeIndex: 0, // Default active sector
    innerRadius:60,
    donutWidth:40
  } as DonutChartProps,
};
