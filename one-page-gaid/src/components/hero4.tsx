
import styles from "./hero4.module.css";
import person1 from "../assets/person1.png"; // Certifique-se de ter a imagem
import person2 from "../assets/person2.png"; // Certifique-se de ter a imagem
import person3 from "../assets/person3.png"; // Certifique-se de ter a imagem

const Hero4 = () => {
  return (
    <div className={styles.hero}>


      <div className={styles.groupCard}>
      <div className={styles.card1}>
        <img
          src={person1}
          alt="Carro clássico em uma garagem"
          className={styles.image}
        />
          <p className={styles.descricao}>
          Rafael de Souza Pinto <br /> RM 555130 <br /> 1TDSPI <br />{" "}
          <a 
            href="https://github.com/RafaellSouzaPinto" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            github.com/RafaellSouzaPinto
          </a>
        </p>
      </div>
        <div className={styles.card2}>
          <img
            src={person2}
            alt="Carro clássico em uma garagem"
            className={styles.image}
          />
          <p className={styles.descricao}>
            Carolina Dias Pinsdorf <br /> RM 556898
            <br /> 1TDSPI <br /> 
            <a 
              href="https://github.com/carolpinsdorf" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.githubLink}
            >
              github.com/carolpinsdorf
            </a>
          </p>
        </div>

        <div className={styles.card3}>
          <img
            src={person3}
            alt="Carro clássico em uma garagem"
            className={styles.image}
          />
          <p className={styles.descricao}>
          Victor Martins Antonopoulos <br /> RM:556313 <br /> 1TDSPI <br />{" "}
          <a 
              href="https://github.com/VictorAntonopoulos" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.githubLink}
            >
              github.com/VictorAntonopoulos
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero4;
