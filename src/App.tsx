import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/header";
import CharacterContainer from "./components/character_container";
import Navigation from "./components/navigation";
import { DisneyCharacter } from "./disney_character";

export const FavouritesContext = React.createContext<number[]>([]);
const App: React.FC = () => {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isFavouritesPage, setIsFavouritesPage] = useState<boolean>(false);
    const [characters, setCharacters] = useState<Array<DisneyCharacter>>([]);
    const [characterFavourites, setCharacterFavourites] = useState<any>([]);
    useEffect(() => {
        const getCharacters = async (pageNumber: number) => {
            const apiResponse = await fetch(`http://api.disneyapi.dev/characters?page=${pageNumber}`);
            const json = await apiResponse.json() as { data: DisneyCharacter[] };
            setCharacters(json.data);
        };
        getCharacters(currentPage);
    }, [currentPage]);
    return (
        <FavouritesContext.Provider value={characterFavourites}>
            <div className="page">
                <Header currentPage={currentPage} />
                <Navigation
                    currentPage={currentPage} setCurrentPage={setCurrentPage} setIsFavouritesPage={setIsFavouritesPage} />
                <CharacterContainer characters={characters}
                    updateFavourites={setCharacterFavourites} isFavouritesPage={isFavouritesPage} />
            </div>
        </FavouritesContext.Provider>
    );
};

export default App;