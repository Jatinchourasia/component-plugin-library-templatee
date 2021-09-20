import React from 'react'

import { Button, Buttons } from './button/Button'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
export { Button, Buttons }
