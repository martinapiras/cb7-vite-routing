import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { user } from "../../mocks/user.js";
import styles from "./Login.module.scss";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isInvalid, setIsInvalid] = useState(false);

  const onHandleUsername = (e) => setUsername(e.target.value);
  const onHandlePassword = (e) => setPassword(e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();

    try {
      if (user.username === username && user.password === password) {
        navigate("/dashboard");
        setIsInvalid(false);
        alert("Glad to see you here!");
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("userInfo", JSON.stringify(user));
      }
      throw new Error("Credenziali non valide");
    } catch (err) {
      console.log(err);
      setIsInvalid(true);
    }
  };

  return (
    <div className={`${styles.Login} col-12`}>
      <h1>Login</h1>
      <form onSubmit={onHandleSubmit} className={styles.loginForm}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={onHandleUsername}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onHandlePassword}
          required
        />
        <input type="submit" value="Login" required />
      </form>
      {isInvalid && <p className={styles.error}>Wrong credentials!</p>}
    </div>
  );
};

export default Login;
