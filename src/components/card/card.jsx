import React, { useState } from "react";
import {
  ContactCard,
  ContactCardDesc,
  ContactCardIcon,
  ContactCardTitle,
  ContactCardWrapper,
} from "./styles.js";
import { calendar, newfeature, tick, shuffle } from "../../assets/index.js";

const Card = ({ setdebtTool }) => {
  const [activeCard, setActiveCard] = useState(null);

  let cardData = [
    {
      icon: tick,
      title: "Find a debt fix",
      description: "See solution in 2 minutes",
    },
    {
      icon: shuffle,
      title: "Compare",
      description: "How does your debt stack up?",
    },
    {
      icon: newfeature,
      title: "Predict",
      description: "Find out how long 'til your debt is gone",
    },
    {
      icon: calendar,
      title: "Forecast",
      description: "Track your debts into the future",
    },
  ];

  const handleCardClick = (index, item) => {
    setActiveCard(index);
    setdebtTool(item.title);
  };

  return (
    <div>
     
      <ContactCardWrapper>
        {cardData.map((item, index) => (
          <ContactCard
            key={index}
            className={index === activeCard ? "active" : ""}
            onClick={() => handleCardClick(index, item)}
          >
            <ContactCardIcon
              src={item.icon}
              width={24}
              height={24}
              alt="icon"
            />
            <ContactCardTitle className="">{item.title}</ContactCardTitle>
            <ContactCardDesc className="">{item.description}</ContactCardDesc>
          </ContactCard>
        ))}
      </ContactCardWrapper>
    </div>
  );
};

export default Card;
