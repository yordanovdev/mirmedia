import React from "react";
import { useForm } from "react-hook-form";
import styles from "../../styles/Login.module.css";
import http from "../../services/http/httpService";
import { useRouter } from "next/router";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    http
      .post("api/TokenAuth/Authenticate", {
        usernameOrEmailAddress: data.username,
        password: data.password,
      })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.result.accessToken);
        router.push("/")
      })
      .catch((err) => {
        alert("Wrong username or password");
      });
  };
  return (
    <div className={styles.login}>
      <form className={styles.main} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.text}>Login here</h1>
        <input
          className={styles.input}
          placeholder="Username"
          {...register("username", { required: true })}
        ></input>

        <input
          className={styles.input}
          placeholder="Password"
          type="password"
          {...register("password", { required: true })}
        ></input>

        <button className={styles.btn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
