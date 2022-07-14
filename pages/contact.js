import React from 'react';
import styles from "../styles/Contact.module.css";
import Image from 'next/image';

export default function contact() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.title}>CÔNG TY TNHH PIZZA VIỆT NAM</div>
        <div className={styles.text}>Để đặt bánh pizza, vui lòng liên hệ tổng đài số: 024.36.888.777</div>
        <div className={styles.text}>Để phản ánh chất lượng dịch vụ, vui lòng gọi số: 0989.139.565</div>
        <div className={styles.text}>Email: lienhepizza@gmail.com</div>
        <div className={styles.title}>CÁC CƠ SỞ PIZZA EXPRESS</div>
        <div className={styles.address}>
        <div className={styles.number}>1</div>
        <div className={styles.text}>
           Ward 7, District Tan Binh,
             Ho Chi Minh</div>
        </div>   
        <div className={styles.address}>
        <div className={styles.number}>2</div>
        <div className={styles.text}> 
        Ward 12, District Tan Binh,
            Ho Chi Minh</div>
        </div>
      </div>
   
  <div className={styles.imageMap}>
  <Image src='/img/map.png' layout='fill' objectFit='cover' alt=''/>
  </div>
  
</div>
  )
}
