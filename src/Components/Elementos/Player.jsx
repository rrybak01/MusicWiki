import React, { useEffect, useState } from "react";
import "./Tarjeta.css";

const Player = ({ url, imagen, text }) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [audio, playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  });

  return (
    <div
        className="tarjetaPlayer"
        onClick={toggle}
    >
        <img src={imagen} alt={text} className="imagenTarjeta"></img>
        <p className="tituloTarjeta">{text}</p>
    </div>
  );
};

export default Player;