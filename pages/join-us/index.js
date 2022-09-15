import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { RotatingLines } from "react-loader-spinner";
import styles from "../../styles/JoinUs.module.css";

const JoinUs = () => {
  const [signalState, setSignalState] = useState("no");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setSignalState("pending");
    console.log(data);
    setTimeout(() => {
      setSignalState("yes");
    }, 3000);
  };
  if (signalState == "yes") {
    return (
      <div className={styles.dataContainer}>
        <h1>Thanks for contributing to out community</h1>
      </div>
    );
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
                <p>Subscribe for our Newsletter</p>
              </label>
            </div>
            <input
              type="submit"
              value="Submit"
              id="input-submit"
              className={styles.inputSubmit}
            />
          </form>
          <div className={styles.imageSection}>
            <Image src={"/images/founder.png"} width="310" height="410" />
          </div>
        </div>
      </div>
    );
  }
};
export default JoinUs;
