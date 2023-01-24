import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { randomCodeGenerator } from "../utils/randomCodeGenerator";

const Welcome = ({ redirectTo, images: { show, image } }) => {
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
    <div>
      <h1>Welcome</h1>
      {openTutorial && <h2>openTutorial</h2>}
    </div>
  );
};

export { Welcome };
