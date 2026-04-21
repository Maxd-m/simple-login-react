import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./modal.jsx";

function MenuScreen({ users, currentUser }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1>Menu</h1>
      <Link to="/">Cerrar sesión</Link>

      <h3>Usuarios: </h3>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i}>
              <td>{u.username}</td>
              <td>
                <button className="counter">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ height: "4rem" }}></div>

      <h3>Mi usuario</h3>
      <div
        style={{
          display: "flex",
          gap: "5rem",
          justifyContent: "center",
        }}
      >
        <p>{currentUser?.username}</p>
        <p>{currentUser?.password}</p>
      </div>
      <button
        className="counter"
        onClick={() => setIsOpen(true)}
        style={{
          width: "10rem",
          justifyContent: "center",
          alignSelf: "center",
          margin: "2rem",
        }}
      >
        Editar
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Editar usuario</h2>
        <form className="form-column">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="counter">
            Guardar
          </button>
        </form>
      </Modal>
    </>
  );
}

export default MenuScreen;
