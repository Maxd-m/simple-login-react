import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";
function LoginScreen() {
  const [fields, setFields] = useState({ username: "", password: "" });
  const navigate = useNavigate(); // Hook para navegar programáticamente

  const handleLogin = (e) => {
    e.preventDefault();

    // Buscamos si existe un usuario que coincida con lo escrito
    const userExists = users.find(
      (u) => u.username === fields.username && u.password === fields.password,
    );

    if (userExists) {
      alert(`Bienvenido ${userExists.username}`);
      // navigate("/home");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <section id="center">
      <div>
        <h1>Login vite</h1>
        <form className="form-column" onSubmit={handleLogin}>
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
            Login
          </button>
        </form>
      </div>
      <Link to="/register">¿No tienes cuenta? Regístrate</Link>
    </section>
  );
}

export default LoginScreen;
