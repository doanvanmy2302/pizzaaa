import React from 'react';
import styles from "../styles/Promotion.module.css";
import Image from 'next/image';

export default function promotion() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Khuyến mãi</h1>
        <div className={styles.wrapper}>

        <div className={styles.image}>
        <Image  src='/img/promotion1.jpg' layout='fill' objectFit='cover' alt=''/>
        </div>
        <div className={styles.image}>
        <Image  src='/img/promotion2.jpg' layout='fill' objectFit='cover' alt=''/>
        </div>
        <div className={styles.image}>

        <Image src='/img/promotion3.png' layout='fill' objectFit='cover' alt=''/>
        </div>
        <div className={styles.image}>

        <Image src='/img/promotion4.png' layout='fill' objectFit='cover' alt=''/>
        </div>
        </div>
    </div>
  )
}
