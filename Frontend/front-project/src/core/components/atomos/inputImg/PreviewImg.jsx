import React from 'react'
import styles from "../inputImg/PreviewImg.module.css"
import Button from '../Button/Button'

function PreviewImg({url, evento}) {
  return (
    <div className={styles.Preview}>
        <div className={styles.pImg} style={{backgroundImage: `url("${url}")`}}></div>
        <div className={styles.btnCont}>
            <Button variante={"orange"} texto={"Quitar"} onClick={() => evento("")}></Button>
        </div>
    </div>
  )
}

export default PreviewImg