import React from 'react';
import CharacterItem from './CharacterItem';
import styles from '../Styles/CharacterList.module.css';
import { useState, useEffect } from 'react';

function CharacterList({ characters, onCharacterSelect, selectedCharacters ,onDeleteCharacter}) {
    const [favorites, setFavorites] = useState(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (!Array.isArray(storedFavorites)) {
            // Handling invalid data in local storage
            return [];
        }
        return storedFavorites;
      });

      const handleFavoriteToggle = (characterId) => {
        if (favorites.includes(characterId)) {
          const updatedFavorites = favorites.filter((id) => id !== characterId);
          setFavorites(updatedFavorites);
        } else {
          const updatedFavorites = [...favorites, characterId];
          setFavorites(updatedFavorites);
        }
      };
    
      useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }, [favorites]);
   
  return (
    <div className={styles.photoList}>
      {characters.map((character) => (
        <CharacterItem
          key={character.id}
          character={character}
          isSelected={selectedCharacters.includes(character.id)}
          isFavorite={favorites.includes(character.id)}
          onCharacterSelect={onCharacterSelect}
          onDeleteCharacter={onDeleteCharacter}
          onFavoriteToggle = {handleFavoriteToggle}
        />
      ))}
    </div>
  );
}

export default CharacterList;


