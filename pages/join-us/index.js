import React, { useState } from "react";
import httpService from "../../services/http/httpService";
import { useForm } from "react-hook-form";
import { RotatingLines } from "react-loader-spinner";
import styles from "../../styles/JoinUs.module.css";

const JoinUs = () => {
  const [signalState, setSignalState] = useState("no");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (!data.name || !data.email || !data.subject || !data.message) {
      return;
    }
    setSignalState("pending");
    console.log(data);
    httpService
      .post("api/services/app/Signal/Create", {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        subscribed: data.subscribed,
      })
      .then((res) => {
        setSignalState("yes");
      })
      .catch((e) => {
        setSignalState("error");
      });
  };

  if (signalState == "yes") {
    return (
      <div className={styles.dataContainer}>
        <h1>Thanks for contributing to out community</h1>
      </div>
    );
  } else if (signalState == "error") {
    <div className={styles.dataContainer}>
      <h1>Oops! There was an error with your request</h1>
    </div>;
  } else if (signalState == "pending") {
    return (
      <div className={styles.dataContainer}>
        <RotatingLines
          strokeColor="purple"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );
  } else {
    return (
      <div className={styles.joinUs}>
        <br />
        <div className={styles.container}>
          <form
            className={styles.contactForm}
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1>Подай сигнал!</h1>
            <div className={styles.inputs}>
              <input
                type="text"
                id="input-name"
                placeholder="Name"
                {...register("name", { required: true })}
              />
              <input
                type="email"
                id="input-email"
                placeholder="Email address"
                {...register("email", { required: true })}
              />
              <input
                type="text"
                id="input-subject"
                placeholder="Subject"
                {...register("subject", { required: true })}
              />
            </div>
            <div className={styles.textarea}>
              <textarea
                name="message"
                type="text"
                id="input-message"
                placeholder="Message"
                {...register("message", { required: true })}
              ></textarea>
              <label>
                <input type="checkbox" {...register("subscribed")} />
                <p>Абонирайте се за нашия бюлетин</p>
              </label>
            </div>
            <input
              type="submit"
              value="Submit"
              id="input-submit"
              className={styles.inputSubmit}
            />
          </form>
        </div>
      </div>
    );
  }
};
export default JoinUs;
