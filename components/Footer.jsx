import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            CÔNG TY TNHH PIZZA VIET NAM
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>TÌM NHÀ HÀNG CHÚNG TÔI</h1>
          
         
          <p className={styles.text}>
           Ward 7, District Tan Binh 
            <br /> Ho Chi Minh
            <br /> 038-463-1284
          </p>
          <p className={styles.text}>
          Ward 12, District Tan Binh 
            <br /> Ho Chi Minh
            <br /> 093-346-2609
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>THỜI GIAN HOẠT ĐỘNG</h1>
          <p className={styles.text}>
            THỨ 2 - THỨ 6
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            THỨ 7 - CHỦ NHẬT
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
