import React from 'react'
import { Button } from './../button/Button'

export default {
  title: 'Example/Button',
  component: Button
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text: 'Bfddddutton'
}
