import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import "./App.css";

import RegisterScreen from "./register_screen.jsx";
import LoginScreen from "./login_screen.jsx";
import MenuScreen from "./menu_screen.jsx";

function App() {
  // Aquí vive nuestra "base de datos" temporal
  const [users, setUsers] = useState([
    { username: "admin", password: "1234" }, // Usuario por defecto
  ]);

  // Función para agregar un usuario nuevo
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const [currentUser, setCurrentUser] = useState({});

  const editUser = (oldUsername, updatedUser) => {
    setUsers(users.map((u) => (u.username === oldUsername ? updatedUser : u)));

    if (currentUser.username === oldUsername) {
      setCurrentUser(updatedUser);
    }
  };
  const deleteUser = (usernameToDelete) => {
    // .filter conservará todos los usuarios cuyo nombre sea DISTINTO al que queremos borrar
    setUsers(users.filter((u) => u.username !== usernameToDelete));
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal: Login */}
        <Route
          path="/"
          element={
            <LoginScreen users={users} setCurrentUser={setCurrentUser} />
          }
        />

        {/* Ruta de registro */}
        <Route
          path="/register"
          element={<RegisterScreen addUser={addUser} />}
        />
        {/* Ruta al menu */}
        <Route
          path="/home"
          element={
            <MenuScreen
              users={users}
              currentUser={currentUser}
              editUser={editUser}
              deleteUser={deleteUser}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
