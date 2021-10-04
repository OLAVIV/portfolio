import React, { useState } from 'react'
import styles from "./clickCount.module.scss"
type ClickCountProps = {

}

const ClickCount: React.FC<ClickCountProps> = () => {
    const [counts, setCounts] = useState(0);
  return (
    <div className= {styles.container}>
        <p className= {styles.laskija}> Klikkasit {counts} kertaa</p>
        <button className= {styles.btns} onClick={() => setCounts(counts + 1)}>
            Klikkaa tätä
        </button>
        <button className= {styles.btns} onClick={() => setCounts(0)}>
            Aloita alusta
        </button>
    </div>
  );
}

export default ClickCount
