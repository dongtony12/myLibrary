import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from '../src/components/Button/styles'

export default {
  argTypes: {
    disabled: {
      control: { type: 'radio' },
      options: [true, false],
    },
    size: {
      control: { type: 'radio' },
      options: ['large', 'medium', 'small', 'XSmall'],
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'territory'],
    },
  },
  component: Button,
  title: 'Common/Button',
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Button {...args}>{args.children}</Button>
  </div>
)

export const button = Template.bind({})
button.args = {
  children: '구매하기',
}
