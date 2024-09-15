import React, { useState } from "react";
import styles from "./cadastroDoVeiculo.module.css";
import { Header } from "./molecules/header";
import ButtonExit from "./molecules/buttonExit";

const CadastroDoVeiculo = () => {
  const [veiculo, setVeiculo] = useState({
    placa: "",
    marca: "",
    modelo: "",
    ano: "",
  });

  const [erroAno, setErroAno] = useState(false);
  const [erroPlaca, setErroPlaca] = useState(false);
  const [currentCard, setCurrentCard] = useState(1);
  const [veiculosCadastrados, setVeiculosCadastrados] = useState<any[]>([]);
  const [mensagem, setMensagem] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "ano") {
      if (!/^\d*$/.test(value)) {
        setErroAno(true);
      } else {
        setErroAno(false);
      }
    }

    if (name === "placa") {
      const placaValida = /^(?=(?:[^a-zA-Z]*[a-zA-Z]){4})(?=(?:[^0-9]*[0-9]){3})[a-zA-Z0-9]{7}$/.test(value);
      setErroPlaca(!placaValida);
    }

    setVeiculo({
      ...veiculo,
      [name]: value,
    });
  };

  const handleCadastrar = () => {
    if (isFormValid()) {
      if (veiculosCadastrados.length < 3) {
        setCurrentCard(2);
      } else {
        setMensagem("Você excedeu o limite de veículos cadastrados.");
        setTimeout(() => {
          setMensagem("");
        }, 2000);
      }
    }
  };

  const handleEditar = () => {
    setCurrentCard(1);
  };

  const handleExcluir = (index: number) => {
    const novosVeiculos = veiculosCadastrados.filter((_, i) => i !== index);
    setVeiculosCadastrados(novosVeiculos);

    if (novosVeiculos.length === 0) {
      setCurrentCard(1);
    }
  };

  const handleConfirmar = () => {
    if (isFormValid()) {
      setVeiculosCadastrados([...veiculosCadastrados, veiculo]);
      setMensagem("Veículo cadastrado com sucesso! Aguarde...");
      setVeiculo({ placa: "", marca: "", modelo: "", ano: "" });

      setTimeout(() => {
        setMensagem("");
        setCurrentCard(3); 
      }, 2000);
    }
  };

  const handleVerVeiculosCadastrados = () => {
    setCurrentCard(3);
  };

  const isFormValid = () => {
    return (
      veiculo.placa &&
      veiculo.marca &&
      veiculo.modelo &&
      veiculo.ano &&
      !erroAno &&
      !erroPlaca
    );
  };

  return (
    <div className={styles.container}>
      <Header title="E garagem" />

      <div className={styles.cardsWrapper}>
        {currentCard === 1 && (
          <div className={`${styles.card} ${styles.formCard}`}>
            <h3 className={styles.formTitle}>Cadastro de Veículo</h3>
            <div className={styles.field}>
              <input
                type="text"
                name="placa"
                value={veiculo.placa}
                onChange={handleChange}
                placeholder="Placa"
                className={erroPlaca ? styles.inputError : ""}
              />
              {erroPlaca && (
                <p className={styles.errorMessage}>
                  A placa deve conter exatamente 4 letras e 3 números.
                </p>
              )}
            </div>
            <div className={styles.field}>
              <input
                type="text"
                name="marca"
                value={veiculo.marca}
                onChange={handleChange}
                placeholder="Marca"
              />
            </div>
            <div className={styles.field}>
              <input
                type="text"
                name="modelo"
                value={veiculo.modelo}
                onChange={handleChange}
                placeholder="Modelo"
              />
            </div>
            <div className={styles.field}>
              <input
                type="text"
                name="ano"
                value={veiculo.ano}
                onChange={handleChange}
                placeholder="Ano"
                className={erroAno ? styles.inputError : ""}
              />
              {erroAno && (
                <p className={styles.errorMessage}>
                  Por favor, insira apenas números.
                </p>
              )}
            </div>
            <button
              className={`${styles.button} ${
                !isFormValid() || veiculosCadastrados.length >= 3 ? styles.cursorNotAllowed : ""
              }`}
              onClick={handleCadastrar}
              disabled={!isFormValid() || veiculosCadastrados.length >= 3}
            >
              Cadastrar
            </button>
            {mensagem && <p className={styles.errorMessage}>{mensagem}</p>}
          </div>
        )}

        {currentCard === 2 && (
          <div className={`${styles.card} ${styles.infoCard}`}>
            <h3>Informações Cadastradas</h3>
            <p>
              <strong>Placa:</strong> {veiculo.placa}
            </p>
            <p>
              <strong>Marca:</strong> {veiculo.marca}
            </p>
            <p>
              <strong>Modelo:</strong> {veiculo.modelo}
            </p>
            <p>
              <strong>Ano:</strong> {veiculo.ano}
            </p>
            <button className={styles.button} onClick={handleEditar}>
              Editar
            </button>
            <button
              className={styles.button}
              onClick={handleConfirmar}
              disabled={!!mensagem}
            >
              Confirmar
            </button>
            {mensagem && <p className={styles.successMessage}>{mensagem}</p>}
          </div>
        )}
{currentCard === 3 && (
  <>
    <div className={styles.cardsWrapper}>
      {veiculosCadastrados.length > 0 ? (
        veiculosCadastrados.map((v, index) => (
          <div
            key={index}
            className={`${styles.card} ${styles.registeredCard}`}
          >
            <h3>Veículo Cadastrado</h3>
            <p>
              <strong>Placa:</strong> {v.placa}
            </p>
            <p>
              <strong>Marca:</strong> {v.marca}
            </p>
            <p>
              <strong>Modelo:</strong> {v.modelo}
            </p>
            <p>
              <strong>Ano:</strong> {v.ano}
            </p>
            <button
              className={styles.button}
              onClick={() => handleExcluir(index)}
            >
              Excluir Veículo
            </button>
          </div>
        ))
      ) : (
        <p>Nenhum veículo cadastrado.</p>
      )}
    </div>
    <div className={styles.buttonContainer}>
      <button
        className={`${styles.button} ${styles.newVehicleButton}`} 
        onClick={() => setCurrentCard(1)}
      >
        Cadastrar Novo Veículo
      </button>
    </div>
  </>
)}

{veiculosCadastrados.length > 0 && currentCard !== 3 && (
  <div className={styles.buttonContainer}>
    <button
      className={`${styles.button} ${styles.viewVehiclesButton}`} 
      onClick={handleVerVeiculosCadastrados}
    >
      Ver Veículos Cadastrados
    </button>
  </div>
)}

      </div>

      <ButtonExit />
    </div>
  );
};

export default CadastroDoVeiculo;
