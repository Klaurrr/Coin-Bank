import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

const meta = {
      title: "shared/Button",
      component: Button,
      parameters: {
            layout: "centered",
      },
      tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimarySmall: Story = {
      args: {
            variant: "primary",
            children: "Test",
            size: "small",
      },
};

export const PrimaryLarge: Story = {
      args: {
            variant: "primary",
            children: "Test",
            size: "large",
      },
};
export const SecondarySmall: Story = {
      args: {
            variant: "secondary",
            children: "Test",
            size: "small",
      },
};
export const SecondaryLarge: Story = {
      args: {
            variant: "secondary",
            children: "Test",
            size: "large",
      },
};

// export const Secondary: Story = {
//   args: {},
// };

// export const Large: Story = {
//   args: {
//         size: "large",
//   },
// };

// export const Small: Story = {
//   args: {
//         size: "small",
//   },
// };
