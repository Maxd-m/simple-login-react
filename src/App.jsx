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
    { username: "admin", password: "1243" }, // Usuario por defecto
  ]);

  // Función para agregar un usuario nuevo
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal: Login */}
        <Route path="/" element={<LoginScreen users={users} />} />

        {/* Ruta de registro */}
        <Route
          path="/register"
          element={<RegisterScreen addUser={addUser} />}
        />
        {/* Ruta al menu */}
        <Route path="/home" element={<MenuScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
