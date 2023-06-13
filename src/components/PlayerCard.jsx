import React from "react";
import styles from '../css/PlayerCard.module.css';

export default function PlayerCard({ player }) {
  console.log("Player: ", player)
  return (
    <div>
      <figure>
        <img 
          className={"styles.img"} 
          src={player.imageUrl} 
          alt="A pic of a furry player" 
        />
        <figcaption>
          <p>Name: {player.name}</p>
          <p>Breed: {player.breed}</p>
        </figcaption>
      </figure>
    </div>
  );
}