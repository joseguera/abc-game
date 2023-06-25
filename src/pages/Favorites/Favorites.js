import React from "react";
import { PageHeader, Button } from "components";
import { FavoritesHolder, ButtonMatrix } from "./Favorites.styles";

export default function Favorites({ animals, numbers, instruments }) {

  const favoriteAnimals = animals.filter(animal => animal.isLiked);
  const favoriteInstruments = instruments.filter(instrument => instrument.isLiked);
  const favoriteNumber = numbers.filter(number => number.isLiked);

  return (
    <FavoritesHolder>
      <PageHeader pageTitle="My Favorites" />
      <h2>Favorite Animals</h2>
      <ButtonMatrix>
        {favoriteAnimals.map((animal) => {
          return (
            <div key={animal.id}>
              <Button item={animal} />
            </div>
          )
        })}
      </ButtonMatrix>
      <h2>Favorite Instruments</h2>
      <ButtonMatrix>
        {favoriteInstruments.map((instrument) => {
          return (
            <div key={instrument.id}>
              <Button item={instrument} />
            </div>
          )
        })}
      </ButtonMatrix>
      <h2>Favorite Numbers</h2>
      <ButtonMatrix>
        {favoriteNumber.map((number) => {
          return (
            <div key={number.id}>
              <Button item={number} />
            </div>
          )
        })}
      </ButtonMatrix>
    </FavoritesHolder>
  ) 
}
