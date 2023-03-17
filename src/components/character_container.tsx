import React, { useContext } from "react";
import { DisneyCharacter } from "../disney_character";
import Character from "./character";
import { FavouritesContext } from '../App';

interface CharacterContainerProps {
    characters: Array<DisneyCharacter>;
    updateFavourites: (favourites: Array<number>) => void;
    isFavouritesPage: boolean;
}

const CharacterContainer: React.FC<CharacterContainerProps> = (
    { characters, updateFavourites, isFavouritesPage }) => {
    const characterFavourites = useContext(FavouritesContext);
    const favourites = characters.filter(character => characterFavourites.includes(character._id));
    const page = !isFavouritesPage ? characters : favourites;

    return (
        <div className="card-container">
            {page.map((character) => (
                <Character key={character._id} character={character} updateFavourites={updateFavourites} />
            ))}
        </div>
    );
};

export default CharacterContainer;
