import { Link, useNavigate } from "react-router-dom";

function MenuScreen({ users, currentUser }) {
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

      <h3>Mi usuario</h3>
      <p>{currentUser}</p>
    </>
  );
}

export default MenuScreen;
