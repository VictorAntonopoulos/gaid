import { useState } from "react";
import styles from "./FeedbackForm.module.css";
import Input from "./molecules/input";

const FeedbackForm = () => {
  const stateInitialForm = {
    experiencia: "",
    nome: "",
    email: "",
  };

  const [dataForm, setDataform] = useState(stateInitialForm);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login enviado:", dataForm);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDataform({ ...dataForm, [name]: value });
    console.log(dataForm);
  };

  return (
    <div className={styles.formContainer}>
      <div>

      <h2 className={styles.title}>Queremos seu feedback</h2>
      <p className={styles.contactInfo}>
        Suporte via e-mail: <br /> suporte@gaid.com
        <br />
        SAC: <br />
        (11)555130
      </p>
      <div className={styles.container}>
        <Input
          type="text"
          label="DESCREVA SUA EXPERIENCIA:"
          name="experiencia"
          onChange={handleChange}
          />
        <div className={styles.row}>
          <Input type="text" label="Nome" name="nome" onChange={handleChange} />
          <Input
            type="email"
            label="Email"
            name="email"
            onChange={handleChange}
            />
        </div>
        <form onSubmit={handleSubmit}>
          <button type="submit" className={styles.submitButton}>Enviar</button>
          </form>
            </div>
      </div>
      <div className={styles.address}>
        <p>Av. Paulista, 106 7º andar - Bela Vista, São Paulo-SP, 0131-000</p>
        <div>
        <span><a href="https://www.facebook.com" target="_blank">Fb.</a></span>
        <span><a href="https://twitter.com/" target="_blank">Tw.</a></span>
        <span><a href="https://www.instagram.com" target="_blank">In.</a></span>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
