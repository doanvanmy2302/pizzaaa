
import axios from "axios";
import Head from "next/head";
import Featured from "../components/Featured";
import {useState} from 'react';
import PizzaList from "../components/PizzaList";
import Add from '../components/Add';
import AddButton from '../components/AddButton';
import styles from "../styles/Home.module.css";

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true)
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza number one viet nam</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
      <Featured />
     {admin && <AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
     {!close  && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
 const myCookie = ctx.req?.cookies || '';
 let admin = false;
 if(myCookie.token === process.env.TOKEN){
  admin = true;
 }

  const res = await axios.get(`${process.env.URL}/api/products`);
  
  return {
    props: {
      
      pizzaList: res.data,
     admin
    },
  };
};