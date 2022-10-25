import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CTAButton } from '../src/components/CTA/styles'

export default {
  argTypes: {
    disabled: {
      control: { type: 'radio' },
      options: [true, false],
    },
    size: {
      control: { type: 'radio' },
      options: ['large', 'medium', 'small'],
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
  },
  component: CTAButton,
  title: 'Common/Button',
} as ComponentMeta<typeof CTAButton>

const Template: ComponentStory<typeof CTAButton> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <CTAButton {...args}>{args.children}</CTAButton>
  </div>
)

export const CTAbutton = Template.bind({})
CTAbutton.args = {
  children: '구매하기',
}
