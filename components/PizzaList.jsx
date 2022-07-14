import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN VIET NAM</h1>
      <p className={styles.desc}>
         Pizza với hương vị Pizza Ý đích thực từ nguồn nguyên liệu thiên
        nhiên, được chế biến bởi các đầu bếp đầy kinh nghiệm, chúng tôi tự hào
        mang lại cho bạn những trải nghiệm Pizza cực chất.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
