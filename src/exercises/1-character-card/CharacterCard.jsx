import { character } from "./characterData";
// TODO: YOUR CODE HERE

const fetchItems = () => {

}

const CharacterCard = () => {
  return (
    <>
      <div>
        <div style={{
          width: "30em",
          height: "2em",
          backgroundColor: "darkblue",
          border: "2px solid white"
        }}>
          <p style={{ color: "white", fontWeight: "bold" }}>{character.name}</p>
        </div>
        <div style={{
          backgroundColor: "beige",
          display: 'flex',
          alignItems: "center",
          justifyItems: "center",
        }}>
          <p style={{ color: "black", fontWeight: "bold" }}>LV {character.level}</p>
          <p style={{ color: "black", fontWeight: "bold" }}>HP {character.hp_curr}/{character.hp_max}</p>
        </div>
        <div style={{
          backgroundColor: "beige",
          display: 'flex',
          alignItems: "center",
          justifyItems: "center",
        }}>
          <p style={{ color: "black", fontWeight: "bold" }}>LV {character.level}</p>
          <p style={{ color: "black", fontWeight: "bold" }}>HP {character.hp_curr}/{character.hp_max}</p>
        </div>
      </div>
    </>
  );
}

export default CharacterCard;
