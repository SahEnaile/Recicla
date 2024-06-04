import "./form.css";
import { FaRecycle } from "react-icons/fa";
import { useEffect } from "react";

function Form() {
  useEffect(() => {
    const icon = document.querySelector(".recycle-icon");
    let rotation = 0;
    const rotateIcon = () => {
      rotation += 1;
      icon.style.transform = `rotate(${rotation}deg)`;
      requestAnimationFrame(rotateIcon);
    };
    rotateIcon();
  }, []);

  return (
    <div className="form-container">
      <form className="contact-form">
        <h1>Fale Conosco</h1>
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Número de Telefone" required />
        <textarea placeholder="Escreva uma mensagem" required />
        <button type="submit">Enviar</button>
      </form>
      <div className="icon-container">
        <FaRecycle className="recycle-icon" />
      </div>
    </div>
  );
}

export default Form;
