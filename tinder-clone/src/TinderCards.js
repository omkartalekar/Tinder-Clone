import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    },
    {
      name: "Jeff Bezos",
      url: "https://cdn.britannica.com/56/199056-050-CCC44482/Jeff-Bezos-2017.jpg?w=400&h=300&c=crop",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame=(name)=>{
    console.log(name+" left the screen");
  }

  return (
    <>
      <div className="tinderCards">
        <div className="tinderCards__cardContainer">
          {people.map((person) => (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}

              
            >
                <div
                style={{backgroundImage:`url(${person.url})`}} className="card"
                >
                    <h3>{person.name}</h3>
                    </div>
                </TinderCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default TinderCards;
