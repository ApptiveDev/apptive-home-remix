import type { Meta, StoryObj } from '@storybook/react';
import Button from '@components/atoms/button/Button';
import { TextBody } from '@components/atoms/text/TextFactory';

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const MainButton: Story = {
  args: {
    variant: 'light-outlined',
    children: (
      <TextBody.Medium weight="bold">
        21기 모집 링크 바로가기
      </TextBody.Medium>
    ),
  },
};
export const DarkButton: Story = {
  args: {
    variant: 'dark',
    children: (
      <TextBody.Medium weight="bold">
        21기 모집 링크 바로가기
      </TextBody.Medium>
    ),
  },
};export const LightButton: Story = {
  args: {
    variant: 'light',
    children: (
      <TextBody.Medium weight="bold">
        21기 모집 링크 바로가기
      </TextBody.Medium>
    ),
  },
};


