import { useState, useEffect } from "react";
import "./styles/App.css";
import "./styles/Game.css";
import { Welcome } from "./views/Welcome";
import { Room } from "./views/Room";
import { NotFound } from "./views/NotFound";
import { Header } from "./components/Header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./config/Theme";
import { Box } from "@mui/material";
import constants from "./config/constants";
const homepageTheme = constants.homepageTheme;

function App() {
  const [roomCode, setRoomCode] = useState("");
  useEffect(() => {
    const tmpCode = localStorage.getItem("pact-game.roomCode");
    if (tmpCode !== "") {
      setRoomCode(tmpCode);
    }
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Header room={"Home"}></Header>
        <Box sx={homepageTheme} className="Homepage">
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
            <Route path="/room" element={<Room code={roomCode} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export { App };
