import React from "react";
import styles from "../../styles/Contact.module.scss";
import layoutBg from "../../public/images/homeSreenLayoutBackground.png";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const form = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_0mr2rt1", form.current, "vBWt8vTd5h2qaCHfa")
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${layoutBg.src})` }}
      >
        <h1>Свържи се с нас</h1>
        <p>Може да ни пишете за информация и идеи</p>
      </div>
      <div className={styles.contactContainer}>
        <form ref={form} className={styles.contactLeft} onSubmit={onSubmit}>
          <h2>Свържи се с нас!</h2>
          <p>Пишете ни за информация, идеи, критики и още</p>
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            className={styles.input}
            required={true}
          />
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            className={styles.input}
            required={true}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            className={styles.input}
            required={true}
          />
          <textarea
            name="message"
            type="text"
            id="input-message"
            placeholder="Message"
            className={styles.textarea}
            required={true}
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
