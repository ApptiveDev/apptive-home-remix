import type { Meta, StoryObj } from '@storybook/react';
import Image from './Image';
import logo from '@assets/images/logo.svg';

const meta: Meta<typeof Image> = {
  component: Image,
};
export default meta;

type Story = StoryObj<typeof Image>;

export const LogoImage: Story = {
  args: {
    src: logo,
    alt: 'logo',
    responsiveStyle: {
      sm: {
        marginTop: '32px',
      },
      lg: {
        marginTop: '70px',
      },
    },
  },
};
