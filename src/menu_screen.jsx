import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./modal.jsx";

function MenuScreen({ users, currentUser, editUser }) {
  const [isOpen, setIsOpen] = useState(false);

  const [editFields, setEditFields] = useState({ username: "", password: "" });

  useEffect(() => {
    if (isOpen && currentUser) {
      setEditFields({
        username: currentUser.username,
        password: currentUser.password,
      });
    }
  }, [isOpen, currentUser]);

  const handleSave = (e) => {
    e.preventDefault();
    console.log(currentUser.username, editFields);
    editUser(currentUser.username, editFields);
    setIsOpen(false); // Cerramos el modal
    alert("Usuario actualizado con éxito");
  };

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
        <p>Usuario: {currentUser?.username}</p>
        <p>Contraseña: {currentUser?.password}</p>
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
        <form className="form-column" onSubmit={handleSave}>
          <input
            type="text"
            placeholder="Username"
            value={editFields.username}
            onChange={(e) =>
              setEditFields({ ...editFields, username: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            value={editFields.password}
            onChange={(e) =>
              setEditFields({ ...editFields, password: e.target.value })
            }
          />
          <button type="submit" className="counter">
            Guardar
          </button>
        </form>
      </Modal>
    </>
  );
}

export default MenuScreen;
