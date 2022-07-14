import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import {useSelector} from 'react-redux';
import Link from 'next/link';

const Navbar = () =>{
  const quantity = useSelector((state)=> state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src='/img/telephone.png' alt='Telephone' width='32' height='32' />
        </div>
        <div className={styles.texts}>
        <div className={styles.text}>ORDER NOW</div>
        <div className={styles.text}>038.463.1284</div>
      </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href='/' passHref>
            <li className={styles.listItem}>TRANG CHỦ</li>
          </Link>
          <Link href='/promotion' passHref>
          <li className={styles.listItem}>KHUYẾN MÃI</li>
          </Link>
          <Link href='/contact' passHref>
          <li className={styles.listItem}>LIÊN HỆ</li>
          </Link>
          <li className={styles.listItem}>
          <Link href='/admin/' passHref>
           BẢNG ADMIN
        </Link>
         </li>
          <li className={styles.listItem}>
        <Link href='/admin/login' passHref>
       ĐĂNG NHẬP
        </Link>
      </li>
        </ul>
      </div>
      
      <Link href='/cart' passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src='/img/cart.png' alt='cart' width='30' height='30' />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default Navbar;