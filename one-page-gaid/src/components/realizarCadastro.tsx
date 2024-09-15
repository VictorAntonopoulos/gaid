import { useState } from "react";
import styles from "./realizarCadastro.module.css";
import { Header } from "./molecules/header";
import Input from "./molecules/input";
import logoMarca from "./../assets/logomarcaporto.png";
import { useNavigate } from "react-router-dom";

const RealizarCadastro = () => {
  const stateInitialForm = {
    nome: "",
    email: "",
    senha: "",
  };

  const [dataForm, setDataform] = useState(stateInitialForm);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!dataForm.nome || !dataForm.email || !dataForm.senha) {
      alert("Todos os campos são obrigatórios")
      return;
    }

    console.log("Cadastro enviado:", dataForm);
    navigate("/area-cliente");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDataform({ ...dataForm, [name]: value });
    console.log(dataForm);
  };

  return (
    <div className={styles.formContainer}>
      <Header />
      <div className={styles.box}>
        <h2 className={styles.title}>REALIZAR CADASTRO</h2>
        <p className={styles.contactInfo}>
          Ao se cadastrar, você <br />
          concorda com nossos Termos, <br />{" "}
          <span>
            Política de Privacidade e <br /> Política de Cookies.
          </span>
        </p>
        <div className={styles.container}>
          <div className={styles.row}>
            <Input
              type="text"
              label="Nome Completo"
              name="nome"
              onChange={handleChange}
            />
            <Input
              type="email"
              label="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className={styles.row2}>
            <Input
              type="password"
              label="senha"
              name="senha"
              onChange={handleChange}
            />
          </div>
          <form onSubmit={handleSubmit}>
          <button type="submit" className={styles.submitButton}>Cadastre-se</button>
          </form>
          <p className={styles.foreignKey}>Tem uma conta? Conecte-se</p>
          <img src={logoMarca} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RealizarCadastro;
