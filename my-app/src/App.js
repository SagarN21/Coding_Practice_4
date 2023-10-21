import React, { useState, useEffect } from 'react';
import LoadingIndicator from './Components/LoadingIndicator';
import CharacterList from './Components/CharacterList';
import { FetchCharacters } from './Components/FetchChar';
import styles from './App.css'


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]); // Use 'characters' for the state variable

  useEffect(() => {
    FetchCharacters()
      .then((data) => {
        console.log(data)
        setCharacters(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const [selectedCharacters, setSelectedCharacters] = useState([]); // Define the state for selected characters

  const handleCharacterSelect = (characterId) => {
    if (selectedCharacters.includes(characterId)) {
      // If character is already selected, deselect it
      const updatedSelectedCharacters = selectedCharacters.filter(id => id !== characterId);
      setSelectedCharacters(updatedSelectedCharacters);
    } else {
      // If character is not selected, select it
      setSelectedCharacters([...selectedCharacters, characterId]);
    }
  };

  const handleDeleteCharacter = (characterId) => {
    // Remove the character from the list
    const updatedCharacters = characters.filter(character => character.id !== characterId);
    setCharacters(updatedCharacters);

    // Deselect the character
    const updatedSelectedCharacters = selectedCharacters.filter(id => id !== characterId);
    setSelectedCharacters(updatedSelectedCharacters);
  };

  return (
    <div className="app">
      <div><header> 
      <h1>PixelPuzzles</h1>
      </header> </div>
      
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <CharacterList
          characters={characters}
          onCharacterSelect={handleCharacterSelect}
          selectedCharacters={selectedCharacters} 
          onDeleteCharacter = {handleDeleteCharacter}
        />
      )}
    </div>
  );
}

export default App;
