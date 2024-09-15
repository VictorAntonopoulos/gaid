import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Agendamento from "./components/agendamento";
import AreaDoCliente from "./components/areaDoCliente";
import CadastroDoVeiculo from "./components/cadastroDoVeiculo";
import FeedbackForm from "./components/feedbackForm";
import Hero from "./components/hero";
import Hero2 from "./components/hero2";
import Hero3 from "./components/hero3";
import Hero4 from "./components/hero4";
import Navbar from "./components/navbar";
import RealizarCadastro from "./components/realizarCadastro";
import RealizarLogin from "./components/realizarLogin";

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/cadastro", "/area-cliente", "/agendamento", "/cadastro-veiculo"];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={
          <>
            <section id="hero">
              <Hero />
            </section>
            <section id="cardiag">
              <Hero2 />
            </section>
            <section id="cdscanner">
              <Hero3 />
            </section>
            <section id="empresa">
              <Hero4 />
            </section>
            <section id="suporte">
              <FeedbackForm />
            </section>
          </>
        } />
        
        <Route path="/login" element={<RealizarLogin />} />
        <Route path="/cadastro" element={<RealizarCadastro />} />
        <Route path="/area-cliente" element={<AreaDoCliente />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/cadastro-veiculo" element={<CadastroDoVeiculo />} />
      </Routes>
    </>
  );
}

function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default MainApp;
