
import styles from './someExampleComponent.module.scss'

import React from 'react'

type SomeExampleComponentProps = {

}

const SomeExampleComponent: React.FC<SomeExampleComponentProps> = () => {
  return (
    <div className={styles.container}>
        <h1>Olavi Kurki</h1>
        <p>My website</p>
    </div>

  )
}

export default SomeExampleComponent
