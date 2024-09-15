
import styles from "./hero2.module.css";
import btnDonwload from "../assets/btnDonwload.png";
import imgframe from "../assets/imgframehero2.svg"
import hero2 from "../assets/hero2.png"; // Certifique-se de ter a imagem

const Hero2 = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <p>CARDIAG</p>
        <p className={styles.subtitle}>
          Com a Plataforma Community, <br />
          você tem tudo o que precisa para cuidar do seu carro. <br />
          Basta cadastrar seus veículos e algumas informações iniciais. <br />
          Quanto mais detalhes você fornecer,
          <br />
          mais útil o aplicativo se torna.
        </p>

        <p className={styles.descbtn}>
         Baixe{" "}
        <a href="https://www.GaidCommunity.com" target="_blank" rel="noopener noreferrer">
        <img src={btnDonwload} alt="" className={styles.imgbtn} width={70} />
        </a>{" "}
         Agora!
        </p>

      </div>
      <img
        src={hero2}
        alt="Carro clássico em uma garagem"
        className={styles.image}
      />

      <img src={imgframe} alt="" className={styles.imgframe} />
    </div>
  );
};

export default Hero2;
