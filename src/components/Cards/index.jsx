import { useState } from "react";
import cards from "../../cardsContent";

export function Cards() {
  const backgroundCards = [
    "#F9CBE6",
    "#C7DCF9",
    "#FFCD92",
    "#DDEFBC",
    "#C1B0E4",
    "#FFC8CD",
    "#DAF1E2",
    "#FFCD92",
  ];

  const [inputFilter, setInputFilter] = useState("");

  const handleInputChanged = (event) => {
    setInputFilter(event.target.value);
  };

  const filtredCard = (card) =>
    card.title.toLowerCase().includes(inputFilter.toLowerCase());

  return (
    <div>
      <div>
        <input
          type="text"
          style={{ width: "300px", height: "35px", padding: "10px" }}
          onChange={handleInputChanged}
        />
      </div>
      <div>
        {cards.filter(filtredCard).map((card, index) => (
          <div
            key={index}
            style={{
              backgroundColor: backgroundCards[index % backgroundCards.length],
            }}
          >
            <img src={card.postImage} alt={card.title} />
            <h2>{card.title}</h2>
            {/* <p>{card.completeText}</p> */}
            <p>{card.postDate}</p>
            <p>{card.dataReadTime}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
