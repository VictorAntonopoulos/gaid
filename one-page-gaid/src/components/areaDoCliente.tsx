import styles from "./areaDoCliente.module.css";
import { Header } from "./molecules/header";
import img from "../assets/iconAreaDoCliente.png"
import img1 from "../assets/iconAreaDoCliente1.png"
import img2 from "../assets/iconAreaDoCliente2.png"
import { Link } from "react-router-dom";
import ButtonExit from "./molecules/buttonExit";

const AreaDoCliente = () => {
  return (
    <div className={styles.formContainer}>
      <Header title="Área Do Cliente" />
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.boxImage}>
            <img className={styles.img} src={img} alt="" />
          </div>
          <div className={styles.descricao}>
            <p>CONVERSAR COM GALDÍ</p>
          </div>
        </div>
          <Link to={'/agendamento'}>
        <div className={styles.box}>
          <div className={styles.boxImage}>
            <img className={styles.img} src={img1} alt="" />
          </div>
          <div className={styles.descricao}>
            <p>AGENDAMENTOS</p>
          </div>
        </div>
          </Link>
        <Link to={'/cadastro-veiculo'}>
        <div className={styles.box}>
          <div className={styles.boxImage}>
            <img className={styles.img} src={img2} alt="" />
          </div>
          <div className={styles.descricao}>
            <p>VISUALIZAR E-GARAGEM</p>
          </div>

        </div>
          </Link>
      </div>

        <ButtonExit/>
    </div>

    
  );
};

export default AreaDoCliente;