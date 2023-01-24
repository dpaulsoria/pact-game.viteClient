import { Box, Modal, ListItemText, Divider } from "@mui/material";
import React from "react";
import constants from "../../config/constants";

const style = constants.styleTheme;
const reglas = constants.reglas;
const manualDividerTheme = constants.manualDividerTheme;
const logoPath = constants.assetsPath + "/logo.png";

function Manual({ setOpenTutorial }) {
  const handleCloseManual = () => setOpenTutorial(false);

  return (
    <Modal open={setOpenTutorial} onClose={handleCloseManual}>
      <Box sx={style}>
        <div className="d-flex flex-row ">
          <div className="d-flex flex-column justify-content-around ml-2 mr-2">
            <img src={logoPath} alt="logo" className="img-fluid" />
            <h4> Objetivos del Juego</h4>
            <span>
              Acumular la mayor cantidad de puntos adivinando cual será la
              respuesta del jurado ante la situación relacionada al maltrato o
              abandono animal.
            </span>
          </div>
          <Divider orientation="vertical" sx={manualDividerTheme} flexItem />
          <div>
            {Object.keys(reglas).map((key, i) => (
              <>
                <div className="option">
                  <span>{key}</span>
                  <ListItemText> {reglas[key]}</ListItemText>
                </div>
                <br />
              </>
            ))}
          </div>
        </div>
      </Box>
    </Modal>
  );
}

export { Manual };
