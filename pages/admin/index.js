import styles from '../../styles/Admin.module.css';
import Image from 'next/image';
import axios from 'axios';

export default function index({orders, products}) {
  
  const handleDelete = async(id)=>{
    try {
      const res = await axios.delete("http://doanvanmy-pizzaaa.vercel.app/api/products/" + id)
   
    } catch (err){
      console.log(err);
    }
  }



  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        <table className={styles.table}>
          <tbody>
            <th>Hình ảnh</th>
            <th>id</th>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Hành dộng</th>
          </tbody>
          <tbody>
          {products.map((product) => (
              <tr key={product.id} className={styles.trTitle}>
                <td><Image src={product.img} width={50} height={50} objectFit='cover' alt='' /></td>
                <td>{product._id.slice(0,5)}...</td>
                <td>{product.title}</td>
                <td>{product.prices[0]}</td>
                <td>
                <button className={styles.button}>Edit</button>
                <button className={styles.button} onClick={()=>handleDelete(product._id)}>Delete</button></td>
              </tr>
              ))}
              </tbody>
            </table>
        </div>
        <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Ngày đặt</th>
              <th>Khách hàng</th>
              <th>Tổng</th>
              <th>Số điện thoai </th>
            </tr>
          </tbody>
          <tbody >
          {orders.map((order) => (
              <tr key={order._id} className={styles.trTitle}>
                <td>{order._id.slice(0, 5)}...</td>
                <td>{order.createdAt.toString().slice(0,16)}</td>
                <td>{order.customer}</td>
                <td>{order.total}.000đ</td>
                <td>{order.phoneNumber}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export const getServerSideProps = async()=>{

  const productRes = await axios.get("http://doanvanmy-pizzaaa.vercel.app/api/products");
   const orderRes = await axios.get("http://doanvanmy-pizzaaa.vercel.app/api/orders");
  return {
    props:{
       orders: orderRes.data,
      products: productRes.data
    }
  }
}