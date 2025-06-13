import { Meta, StoryObj } from '@storybook/react';
import { DataTable, DataTableProps } from './DataTable';
import { Icon } from '@iconify/react/dist/iconify.js';

// Storybook metadata for DataTable
const meta: Meta<typeof DataTable> = {
  title: 'Common/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' }, // Allow the title to be dynamically controlled
    showColumnHeader:{control:'boolean'}
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample JSON data where keys are the first column, and values are arrays for the following columns
const data = {
  "প্রোডাক্ট/সার্ভিস": ["Apartment Management"],
  "সাবস্ক্রিপশন": [<span className="text-green-500">Premium</span>],
  "রেজিস্ট্রেশন তারিখ": ["19-MAY-2024"],
  "সার্ভিস মেয়াদ শেষ হবে": [<span className="text-red-500">28-MAR-2034</span>],
  "সাবস্ক্রিপশন প্ল্যান": ["Forever"],
  "সর্বোচ্চ ফ্ল্যাট সংখ্যা": ["100"],
  "সার্ভিস চার্জ": ["৳ 0"],
  "প্রোডাক্ট/সার্ভিস স্ট্যাটাস": [<span className="text-green-500 items-center flex justify-end gap-2"><Icon icon={'lucide:circle-check-big'} color='#22c55e' fontSize={16}/>Active</span>],
};

// Default story for DataTable
export const Default: Story = {
  args: {
    data, // Passing the JSON data where keys are the first column, values are arrays
    title: 'সাবস্ক্রিপশন', // Default title, which you can control dynamically
    showColumnHeader:false,
    tableStyle: 'border rounded-lg overflow-hidden', // Tailwind styling for the table
    cellStyle: 'text-sm', // Tailwind styling for table cells
  } as DataTableProps,
};
