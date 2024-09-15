import styles from "./agendamento.module.css";
import { Header } from "./molecules/header";
import img2 from "../assets/iconAreaDoCliente2.png";
import ButtonExit from "./molecules/buttonExit";

const Agendamento = () => {
  return (
    <div className={styles.formContainer}>
      <Header title="AGENDAMENTOS" />
      <div className={styles.container}>
        <div className={styles.box}>
          <p className={styles.p1}>Olá, (nome)</p>
          <p className={styles.p2}>Agendados</p>
          <p className={styles.p3}>
            Oficina: <span>DiagnostiCar</span> <br />
            Dia e Hora: 02/12 às 13:40 <br />
            End: Rua Áurea, 239 - Vila Mariana <br />
            Contato: (11) 91234-5678 <br />
            Mecânico(a): Marília{" "}
          </p>
          <p className={styles.p4}>Informações do carro:</p>
          <p className={styles.p5}>
            Marca: <span>Fiat</span> <br /> Modelo: Uno <br /> Placa:{" "}
            <span>BRA2E19</span> <br /> Ano: <span>2019</span>{" "}
          </p>
        </div>

        <img className={styles.img} src={img2} alt="" />
      </div>

      <ButtonExit/>

    </div>
  );
};

export default Agendamento;
