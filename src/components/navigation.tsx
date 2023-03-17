import { useState} from "react";


const Navigation: React.FC<{
    currentPage: number;
    setCurrentPage: (page: number) => void;
    setIsFavouritesPage: (isFavoritesPage: boolean) => void;
}>
    = ({ currentPage, setCurrentPage, setIsFavouritesPage }) => {

        const nextPage = () => {
            setIsFavouritesPage(false);
            const newPageNumber = currentPage + 1;
            setCurrentPage(newPageNumber);
        };

        const prevPage = () => {
            setIsFavouritesPage(false);
            if (currentPage > 1) {
                const newPageNumber = currentPage - 1;
                setCurrentPage(newPageNumber);
            }
        };

        const favouritePage = () => {
            setIsFavouritesPage(true);
        }



        return (
            <div className="navigation">
                <div className="navigation__item">
                    <button className="navigation__button" onClick={prevPage}>
                        Prev Page
                    </button>
                </div>
                <div className="navigation__item">
                    <button className="navigation__button" onClick={favouritePage}>
                        Show Favourites
                    </button>
                </div>
                <div className="navigation__item">
                    <button className="navigation__button" onClick={nextPage}>
                        Next Page
                    </button>
                </div>
            </div>
        );
    };

export default Navigation;
