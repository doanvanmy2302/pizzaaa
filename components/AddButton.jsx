import styles from '../styles/Add.module.css';

const AddButton = ({setClose})=>{
    return (
        <button onClick={()=> setClose(false)} className={styles.mainAddButton}>
            Add new Pizza
        </button>
    )
}
export default AddButton;