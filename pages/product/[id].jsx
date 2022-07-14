import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
import { useRouter } from "next/router";

const Product = ({ pizza }) => {
  const [price, setPrice] = useState(pizza.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  const handleClick = () => {
    dispatch(addProduct({...pizza, extras, price, quantity}));
    console.log({...pizza, extras, price, quantity});
    router.push('/cart');
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>{price}.000đ</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>chọn kích cỡ bánh</h3>
        <div className={styles.sizes}>
          
          <label className={styles.size1} htmlFor='small' name='size'
             onClick={() => handleSize(0)}>
            <Image src="/img/size.png" layout="fill" alt=""  />
            <span className={styles.number}>nhỏ</span>
          </label>
          <input type="radio" id="small" name="size"  />

          <label className={styles.size2} htmlFor='medium'
           onClick={() => handleSize(1)}>
            <Image src="/img/size.png" layout="fill" alt=""  />
            <span className={styles.number}>vừa</span>
          </label>
          <input type="radio" id="medium" name="size"  />

          <label className={styles.size3} htmlFor="large"
           onClick={() => handleSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>lớn</span>
        
          </label>
          <input type="radio" id="large" name="size"  />
        </div>
        <h3 className={styles.choose}>Chọn thêm topping</h3>
        <div className={styles.ingredients}>
          {pizza.extraOptions.map((option) => (
            <div className={styles.option} key={option._id}>
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className={styles.checkbox}
                onChange={(e) => handleChange(e, option)}
              />
              <label htmlFor={option.text}>{option.text}</label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.button} onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://doanvanmy-pizzaaa.vercel.app/api/products/${params.id}`
  );
  return {
    props: {
      pizza: res.data,
    },
  };
};

export default Product;