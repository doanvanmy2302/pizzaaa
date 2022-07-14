import styles from "../styles/Cart.module.css";
import Image from "next/image";
import {useDispatch, useSelector} from 'react-redux';
import { useRouter } from "next/router";
import {  useState } from "react";
import axios from "axios";
import { reset } from "../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) =>state.cart);
  const [customer, setCustomer] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const total = cart.total;
  const dispatch = useDispatch();
 const  router=useRouter(); 
 
 const createOrder = async(data)=>{
  try {
    console.log(data)
    const res = await axios.post("http://doanvanmy-pizzaaa.vercel.app/api/orders", data);
    if(res.status === 201){
     dispatch(reset())
      router.push(`/orders/${res.data._id}`)
    }
  } catch (err){
    console.log(err)
  }
 }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
          <tr className={styles.trTitle}>
            <th>SẢN PHẨM</th>
            <th>TÊN</th>
            <th>TOPPING</th>
            <th>GIÁ</th>
            <th>SỐ LƯỢNG</th>
            <th>TỔNG CỘNG</th>
          </tr>
          </tbody>
          <tbody>
         {cart.products.map((product)=>(
         
          <tr className={styles.tr} key={product._id}>
            
            <td> 
              <div className={styles.imgContainer}>
                <Image src={product.img} layout='fill' objectFit='cover' alt='' />
              </div>
            </td>
            <td>
              <span className={styles.name}>{product.title}</span>
            </td>
            <td>
              <span className={styles.extras}>
                {product.extras.map((extra, index)=>(
                <span key={index}>{extra.text},</span>
                ))}
              </span>
            </td>
            <td>
              <span className={styles.price}>{product.price}.000đ</span>
            </td>
            <td>
              <span className={styles.quantity}>{product.quantity}</span>
            </td>
            <td>
              <span className={styles.total}>
                {product.price*product.quantity}.000đ
              </span>
            </td>
          </tr>
         ))}      
          </tbody>
        </table>
        <div className={styles.totalProducts}>Tổng: {cart.total}.000đ</div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>THÔNG TIN THANH TOÁN</h2>
          <div className={styles.totalText}>
            <input type="text" className={styles.input} placeholder='Họ và tên'
             onChange={(e) => setCustomer(e.target.value)} />
          </div>
          <div className={styles.totalText}>
          <input type="number" className={styles.input} placeholder='Số điện thoại'
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          </div>
          <div className={styles.totalText}>
          <input type="text" className={styles.input} placeholder='Địa chi'
          onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className={styles.totalText}>
            <div className={styles.text}>Yêu cầu khác</div>
            <textarea  className={styles.textarea} placeholder='Ví dụ: Bỏ hành tây, ớt chuông...' />
          </div>
          <div className={styles.text}>Quý khách vui lòng điền đầy đủ thông tin để Pizza phục vụ quý khách được tốt nhất!</div>
          <button onClick={()=> createOrder({customer,address,phoneNumber, total })} className={styles.button}>ĐẶT HÀNG</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
