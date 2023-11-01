import React from 'react';
import CharacterCard from './CharacterCard';

function Grid({ results }) {
  return (
    <div className="h-full overflow-y-auto">
      {results?.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div>
          {results?.data?.map((character) => (
            <CharacterCard key={character.mal_id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Grid;
