import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";
function RegisterScreen({ addUser }) {
  const [fields, setFields] = useState({ username: "", password: "" });
  const navigate = useNavigate(); // Hook para navegar programáticamente

  const handleRegister = (e) => {
    e.preventDefault();

    if (fields.username && fields.password) {
      // Llamamos a la función que vive en App.jsx
      addUser({ username: fields.username, password: fields.password });

      alert("¡Usuario registrado con éxito!");
      navigate("/"); // Redirigir al login
    } else {
      alert("Por favor rellena todos los campos");
    }
  };

  return (
    <section id="center">
      <div>
        <h1>Registro vite</h1>
        <form className="form-column" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={fields.username}
            onChange={(e) => setFields({ ...fields, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={fields.password}
            onChange={(e) => setFields({ ...fields, password: e.target.value })}
          />
          <button type="submit" className="counter">
            Registrarse
          </button>
        </form>
      </div>
      <Link to="/">¿Ya tienes cuenta? Inicia sesión</Link>
    </section>
  );
}

export default RegisterScreen;
