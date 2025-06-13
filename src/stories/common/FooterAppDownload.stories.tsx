
import { Meta, StoryObj } from '@storybook/react';
import { FooterAppDownload } from './FooterAppDowload';

const meta: Meta<typeof FooterAppDownload> = {
  title: 'Common/Footer/FooterAppDownload',
  component: FooterAppDownload,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
