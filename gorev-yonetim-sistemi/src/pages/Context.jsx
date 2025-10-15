import React from "react";
import Card_h1 from "./Card-h1";
import image1 from "../images/section1-image1.png";
import { HiOutlineViewGrid } from "react-icons/hi";
import image2 from "../images/section2-image1.png";
import Card_h3 from "./Card-h3";
import { PiPlanet } from "react-icons/pi";
import image3 from "../images/section2-image1.png";
import { MdTaskAlt } from "react-icons/md";
import image4 from "../images/section2-image2.png";
import { TbSubtask } from "react-icons/tb";
import image5 from "../images/section2-image3.png";

function Context() {
  const cardData1 = [
    {
      cardHeader: "Hundreds of powerful tools, one platform.",
      cardContext:
        "ClickUp comes with hundreds of features that can be customized for any work need—with more added every week. And they're all free, forever.",
      cardList:
        "OVERVIEW, VİEWS, CUSTOMIZATION, DOCS, REPORTING, TIME, ALL FEATURES",
      cardImage: image1,
    },
  ];
  const cardData2 = [
    {
      cardHeader: "ClickUp Overview.",
      cardContext:
        "ClickUp's unique Hierarchy helps you create the perfect structure that scales with your needs.",
    },
  ];
  const cardData3 = [
    {
      cardLogo: <HiOutlineViewGrid />,
      cardHeader: "Everything View",
      cardContext:
        "ClickUp's Everything view makes it easy to find anything you're looking for, no matter where it lives in the Hierarchy. It's your birds-eye view for all tasks across every level of your organization that can be filtered, sorted, and saved for any need.",
      cardImage: image2,
    },
    {
      cardLogo: <PiPlanet />,
      cardHeader: "Space,Folder, List",
      cardContext:
        "Organize teams and departments inte Spaces,group big projects or initiatives into Folders, and break out tasks into Lists for a clear visual hierarchy of all your work.",
      cardImage: image3,
    },
    {
      cardLogo: <MdTaskAlt />,
      cardHeader: "Customizable Tasks",
      cardContext:
        "Choose from 35+ ClickApps to customize your task management for any work need.",
      cardImage: image4,
    },
    {
      cardLogo: <TbSubtask />,
      cardHeader: "Nested substasks & checklists",
      cardContext:
        "Simplify complex projects by breaking them down into levels of subtasks.",
      cardImage: image5,
    },
  ];
  const cardData3 = [
    {
      cardHeader: "Tackle work from any angle with 15+ powerful views.",
      cardLogos : "", // Buraya bak
      cardImage: PiDiscoBallDuotone, //Buraya bak
    }
  ]
  const cardData4 = [
    cardHeader: "Customize ClickUp for any need, no code required.",
    cardContext: "Everything in ClickUp can be easily customized to manage any type of project, no code or add-ons required.",
  ]
  return (
    <div>
      <div className="card-container-1">
        {cardData1.map((card1, index) => (
          <Card_h1
            key={index}
            cardHeader={card1.cardHeader}
            cardContext={card1.cardContext}
            cardList={card1.cardList}
            cardImage={card1.cardImage}
          />
        ))}
      </div>
      <div className="card-container-2">
        {cardData2.map((card2, index) => (
          <Card_h1
            key={index}
            cardHeader={card2.cardHeader}
            cardContext={card2.cardContext}
          />
        ))}
        {cardData3.map((card3, index) => (
          <Card_h3
            key={index}
            cardLogo={card3.cardLogo}
            cardHeader={card3.cardHeader}
            cardContext={card3.cardContext}
            cardImage={card3.cardImage}
          />
        ))}
      </div>
    </div>
  );
}

export default Context;
