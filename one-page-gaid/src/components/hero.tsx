import styles from "./Hero.module.css";
import hero1 from "../assets/hero1.png"; // Certifique-se de ter a imagem

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
        <h1 className={styles.title}>
          Otimize seu tempo <br /> com a GAID: a <br /> solução definitiva{" "}
          <br /> para motoristas e <br /> mecânicos
        </h1>
        <div className={styles.box_dot}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
        <p className={styles.subtitle}>Centro Automotivo Porto</p>
      </div>
      <img src={hero1} alt="Carros" className={styles.image} />
    </div>
  );
};

export default Hero;
