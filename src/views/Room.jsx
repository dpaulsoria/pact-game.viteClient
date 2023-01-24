import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import constants from "../config/constants";
import { shuffleArray } from "../utils/shuffleArray";
import { all } from "../utils/cards";
import { Socket } from "socket.io-client";
import io from "socket.io-client";

const maxPlayers = constants.maxPlayers;
const serverUrl = constants.serverUrl;
const connectionOptions = constants.connectionOptions;

let socket;

function Room({ code }) {
  const navigate = useNavigate();
  const room = code;
  const [roomFull, setRoomFull] = useState(false);
  const [players, setPlayers] = useState([]);
  const normalCards = shuffleArray(all);
  const [currentCard, setCurrentCard] = useState(normalCards[0]);

  // useEffect(() => {
  //   if (players.length < maxPlayers) {
  //     socket = io.connect(serverUrl, connectionOptions);
  //     socket.emit("join", { room: room }, (error) => {
  //       if (error) return error;
  //     });
  //   } else {
  //     quit();
  //   }
  //   return () => {
  //     socket.emit("logOut");
  //     socket.off();
  //   };
  // }, [])

  return (
    <div>
      <h1>{code}</h1>
    </div>
  );
}

export { Room };
