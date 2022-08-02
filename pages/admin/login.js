import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Login.module.css";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    try {
      await axios.post(`${process.env.URL}/admin/login`, {
        username,
        password,
      });
      router.push("/admin");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>
        <input
          placeholder="tên đăng nhập"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="mật khẩu"
          type="password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick} className={styles.button}>
         Đăng nhập
        </button>
        {error && <span className={styles.error}>tên đăng nhập hoặc mật khẩu sai! </span>}
      <div className={styles.text}><b> Để test ứng dụng</b></div>
      <div className={styles.text}>Tên đăng nhập<b>: admin</b></div>
      <div className={styles.text}>Mật khẩu<b>: 123456</b></div>
      </div>
      
    </div>
  );
};

export default Login;