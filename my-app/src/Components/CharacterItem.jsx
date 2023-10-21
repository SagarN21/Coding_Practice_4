import React from 'react';
import styles from '../Styles/CharacterItem.module.css';

function CharacterItem({ character, isSelected, onCharacterSelect,onDeleteCharacter, isFavorite, onFavoriteToggle }) {
  const handleCheckboxChange = () => {
    onCharacterSelect(character.id);
  };

  const handleDeleteClick = () => {
    onDeleteCharacter(character.id);
  };

  
  const handleFavoriteClick = () => {
    onFavoriteToggle(character.id);
  };

  return (
    <div className={`${styles.characterItem} ${isSelected ? styles.selectedItem : ''}`}>

     
      
      <div> 
      <img src={character.thumbnailUrl}/>
      </div>
      <div> 
      <input
        type="checkbox"
        checked={isSelected}
        onChange={handleCheckboxChange}
      />
      <span>{character.title}</span>
      </div>
      <button onClick={handleFavoriteClick} className={`${styles.favoriteButton} ${isFavorite ? styles.favorite : ''}`}>
        {isFavorite ? 'Remove Favorite' : 'Favorite'}
      </button>
      
      {isSelected && (
        <button onClick={handleDeleteClick} className={styles.deleteButton}>
          Delete
        </button>
      )}
    </div>
  );
}

export default CharacterItem;

