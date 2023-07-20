import cards from "../../cardsContent";

export function Cards() {

  const backgroundCards = [
    '#F9CBE6',
    '#C7DCF9',
    '#FFCD92',
    '#DDEFBC',
    '#C1B0E4',
    '#FFC8CD',
    '#DAF1E2',
    '#FFCD92'
  ];

  return (
    <div>
      <div>
        <input type="text" style={{width: '300px', height: '35px', padding: '10px'}} />
      </div>
      <div>
        {cards.map((card, index) => (
          <div key={index} style={{backgroundColor: backgroundCards[index % backgroundCards.length]}}>
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
