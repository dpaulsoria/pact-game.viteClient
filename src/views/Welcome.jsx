import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { randomCodeGenerator } from "../utils/randomCodeGenerator";

import { Button, Box } from "@mui/material";
import { ModalRoom } from "../components/Modals/ModalRoom";
import { Manual } from "../components/Manual/Manual";

import constants from "../config/constants";

const style = constants.styleTheme;
const center = constants.centerTheme;

function Welcome({ redirectTo, images: { show, image } }) {
  const navigate = useNavigate();

  const [roomCode, setRoomCode] = useState("");
  const [openTutorial, setOpenTutorial] = useState(false);

  const saveRoomCode = (roomCode) => {
    localStorage.setItem("pact-game.roomCode", roomCode);
  };

  const joinRoom = () => {
    if (roomCode === "") return;
    saveRoomCode(roomCode);
    if (redirectTo === "game") navigate(`/game?roomCode=${roomCode}`);
    else navigate(redirectTo);
  };

  const createRoom = () => {
    const roomCode = randomCodeGenerator(5);
    setRoomCode(roomCode);
    saveRoomCode(roomCode);
    if (redirectTo === "game") navigate(`/game?roomCode=${roomCode}`);
    else navigate(redirectTo);
  };

  const handleCloseTutorial = () => {
    setOpenTutorial(true);
  };

  return (
    <Box sx={center} className="homepage-menu">
      <div className="homepage-form">
        <div className="homepage-join">
          <ModalRoom
            payload={joinRoom}
            room={{ roomCode, setRoomCode }}
            images={{ image: "trial" }}
            type="join"
          />
        </div>
        <div className="homepage-create">
          <ModalRoom
            payload={createRoom}
            room={{ roomCode, setRoomCode }}
            images={{ image: "trial" }}
            type="create"
          />
        </div>
        <div className="homepage-manual">
          <button
            className="homepage-button"
            onClick={handleCloseTutorial}
          >
            Manual del Juego
          </button>
          {openTutorial && <Manual setOpenTutorial={setOpenTutorial}></Manual>}
        </div>
      </div>
    </Box>
  );
}

export { Welcome };
