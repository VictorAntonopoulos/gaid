import { useState } from "react";
import styles from "./realizarLogin.module.css";
import logoMarca from "./../assets/logomarcaporto.png";
import imgbg from "../assets/imgSignIn.png"
import { Header } from "./molecules/header";
import Input from "./molecules/input";
import { Link, useNavigate } from "react-router-dom";

const RealizarLogin = () => {
  const stateInitialForm = {
    nome: "",
    senha: "",
  };

  const [dataForm, setDataform] = useState(stateInitialForm);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!dataForm.nome || !dataForm.senha) {
      alert("Todos os campos devem está preenchidos")
      return;
    }

    navigate("/area-cliente");
    console.log("Login enviado:", dataForm);
  };
  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDataform({ ...dataForm, [name]: value });
    console.log(dataForm);
  };

  return (
    <div className={styles.formContainer}>
      <Header />
      <img className={styles.imgbg} src={imgbg} alt="" />
      <div className={styles.box}>
        <h2 className={styles.title}>REALIZAR LOGIN</h2>
        <p className={styles.contactInfo}>
          Não tem uma conta? <br />
          <Link to="/cadastro">           Cadastre-se
          </Link>
        </p>
        <div className={styles.container}>
          <div className={styles.row}>
            <Input
              type="text"
              label="Nome"
              name="nome"
              onChange={handleChange}
            />
            <Input
              type="password"
              label="Senha"
              name="senha"
              onChange={handleChange}
            />
          </div>
          <form onSubmit={handleSubmit}>
          <button type="submit" className={styles.submitButton}>Enviar</button>
          </form>

          <p className={styles.foreignKey}>Esqueceu a Senha?</p>
          <img className={styles.logoMarca}src={logoMarca} alt="" />
          
        </div>
      </div>
    </div>
  );
};

export default RealizarLogin;
