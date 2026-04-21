import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginScreen({ users, setCurrentUser }) {
  // <-- Recibimos la prop
  const [fields, setFields] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const userExists = users.find(
      (u) => u.username === fields.username && u.password === fields.password,
    );

    if (userExists) {
      // 1. Guardamos al usuario en el estado global
      setCurrentUser(userExists.username);

      // 2. Avisamos y navegamos
      alert(`Bienvenido ${userExists.username}`);
      navigate("/home");
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
          {/* El botón ya no necesita onClick, el form usa onSubmit */}
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
