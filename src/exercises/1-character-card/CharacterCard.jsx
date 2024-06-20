import { character } from "./characterData";
// TODO: YOUR CODE HERE

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
          flexDirection: 'column',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: "5em" }}>
            <p style={{ color: "black", fontWeight: "bold", }}>LV {character.level}</p>
            <p style={{ color: "black", fontWeight: "bold" }}>HP {character.hp_curr}/{character.hp_max}</p>
          </div>
          <div>
            <img src={character.img} width={"50px"}></img>
          </div>
          <div>
            <p style={{ color: "black" }}>{character.class}</p>
          </div>
        </div>
      </div>
      <div>
        <div style={{
          backgroundColor: "beige",
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div style={{ display: 'flex', flexDirection: "column" }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: "5em" }}>
              <p style={{ color: "black", fontWeight: "bold", }}>Items</p>
              <p style={{ color: "black", fontWeight: "bold" }}>Abilities</p>
            </div>
            <div style={{ display: "flex", }}>
              <ul>
                {character.items.map((item, index) => (
                  <li key={index} style={{ color: "black", listStyleType: "none" }}>{item.item} x{item.quantity}</li>
                ))}
              </ul>
              <ul>
                {character.abilities.map((ability, index) => (
                  <li key={index} style={{ color: "black", listStyleType: "none" }}>{ability}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default CharacterCard;
