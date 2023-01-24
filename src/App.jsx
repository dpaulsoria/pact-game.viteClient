import { useState } from "react";
import logo from "./assets/svg/logo.svg";
import "./styles/App.css";
import { Welcome } from "./views/Welcome";
import { Room } from "./views/Room";
import { NotFound } from "./views/NotFound";
import { Header } from "./components/Header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="Homepage">
      <BrowserRouter>
        <Header room={"Home"}></Header>
        <Routes>
          <Route
            path="/"
            element={
              <Welcome
                images={{ show: true, image: "trial" }}
                redirectTo="room"
              />
            }
          />
          <Routes path="/room" element={<Room code={roomCode} />} />
          <Routes path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export { App };
