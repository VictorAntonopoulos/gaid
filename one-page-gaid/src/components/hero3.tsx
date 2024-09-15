import styles from "./hero3.module.css";
import hero3 from "../assets/hero3.png"; // Certifique-se de ter a imagem

const Hero3 = () => {
  return (
    <div className={styles.hero}>
      <img
        src={hero3}
        alt="Carro clássico em uma garagem"
        className={styles.image}
      />

      <div className={styles.content}>
        <p className={styles.title}>Cardiag  scanner</p>
        <p className={styles.subtitle}>
          O CarDiag Scanner é como um médico <br /> para o seu carro. <br />
          Conecte-o ao veículo e deixe-o cuidar da <br />
          saúde automotiva. <br />
          Ele monitora constantemente, <br />
          identificando problemas antes que se <br /> tornem grandes
          preocupações.
        </p>

        <div className={styles.box_dot}>
          <div className={styles.dot}></div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
