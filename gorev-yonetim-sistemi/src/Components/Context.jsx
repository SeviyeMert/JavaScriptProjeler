import React from "react";
import "../css/Context.css";
import { useLanguage } from "../Contexts/languageContext";
import Card_h1 from "../pages/Card-h1";
import Card_h2 from "../pages/Card-h2";
import Card_h3 from "../pages/Card-h3";
import Card4 from "../pages/Card4";
import Card5 from "../pages/Card5";
import Card6 from "../pages/Card6";
import image1 from "../images/section1-image1.png";
import { HiOutlineViewGrid } from "react-icons/hi";
import image2 from "../images/section2-image1.png";
import { PiPlanet } from "react-icons/pi";
import image3 from "../images/section2-image2.png";
import { MdTaskAlt } from "react-icons/md";
import image4 from "../images/section2-image2.png";
import { TbSubtask } from "react-icons/tb";
import image5 from "../images/section2-image3.png";
import { IoOptionsOutline } from "react-icons/io5";
import image6 from "../images/section4-image1.png";
import image6n1 from "../images/section4-image2.png";
import image6n2 from "../images/section4-image3.png";
import image7 from "../images/section5-image1.png";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import image8 from "../images/section6-image1.png";
import image9 from "../images/section7-image1.png";
import image10 from "../images/section7-image2.png";
import image11 from "../images/section7-image3.png";
import image12 from "../images/section8-image1.png";
import image13 from "../images/section8-image2.png";
import { BsBox } from "react-icons/bs";
import image14 from "../images/section8-image3.png";
import { contextTranslations } from "../i18n/Context";

function Context() {
  const { language } = useLanguage();
  const t = contextTranslations[language];

  const cardData1 = [
    {
      cardHeader: t.card1_header,
      cardContext: t.card1_context,
      cardList: t.card1_list,
      cardImage: image1,
    },
  ];
  const cardData2 = [
    {
      cardHeader: t.card2_header,
      cardContext: t.card2_context,
    },
  ];
  const cardData3 = [
    {
      cardLogo: <HiOutlineViewGrid />,
      cardHeader: t.card3_1_header,
      cardContext: t.card3_1_context,
      cardImage: image2,
    },
    {
      cardLogo: <PiPlanet />,
      cardHeader: t.card3_2_header,
      cardContext: t.card3_2_context,
      cardImage: image3,
    },
    {
      cardLogo: <MdTaskAlt />,
      cardHeader: t.card3_3_header,
      cardContext: t.card3_3_context,
      cardImage: image4,
    },
    {
      cardLogo: <TbSubtask />,
      cardHeader: t.card3_4_header,
      cardContext: t.card3_4_context,
      cardImage: image5,
    },
  ];
  const cardData4 = [
    {
      cardHeader: t.card4_header,
      cardLogo: [
        <TbSubtask />,
        <IoOptionsOutline />,
        <MdTaskAlt />,
        <PiPlanet />,
        <TbSubtask />,
        <MdTaskAlt />,
      ],
      cardImage: [image5, image6, image4, image3, image5, image4],
    },
  ];
  const cardData5 = [
    {
      cardHeader: t.card5_header,
      cardContext: t.card5_context,
    },
  ];
  const cardData6 = [
    {
      cardLogo: <IoOptionsOutline />,
      cardHeader: t.card6_1_header,
      cardContext: t.card6_1_context,
      cardImage: image6,
    },
    {
      cardLogo: <IoOptionsOutline />,
      cardHeader: t.card6_2_header,
      cardContext: t.card6_2_context,
    },
    {
      cardLogo: <IoOptionsOutline />,
      cardHeader: t.card6_3_header,
      cardContext: t.card6_3_context,
      cardImage: image6n1,
    },
    {
      cardLogo: <IoOptionsOutline />,
      cardHeader: t.card6_4_header,
      cardContext: t.card6_4_context,
      cardImage: image6n2,
    },
    {
      cardLogo: <IoOptionsOutline />,
      cardHeader: t.card6_5_header,
      cardContext: t.card6_5_context,
    },
  ];
  const cardData7 = [
    {
      cardHeader: t.card7_header,
      cardContext: t.card7_context,
      cardImage: image7,
    },
  ];
  const cardData8 = [
    {
      cardHeader: t.card8_header,
      cardContext: t.card8_context,
      cardImage: image8,
    },
  ];

  const cardData9 = [
    {
      cardHeader: t.card9_header,
      cardContext: t.card9_context,
    },
  ];
  const cardData10 = [
    {
      cardLogo: <HiOutlineViewGrid />,
      cardHeader: t.card10_1_header,
      cardContext: t.card10_1_context,
      cardImage: image9,
    },
    {
      cardLogo: <HiOutlineViewGrid />,
      cardHeader: t.card10_2_header,
      cardContext: t.card10_2_context,
    },
    {
      cardLogo: <HiOutlineViewGrid />,
      cardHeader: t.card10_3_header,
      cardContext: t.card10_3_context,
      cardImage: image10,
    },
    {
      cardLogo: <HiOutlineViewGrid />,
      cardHeader: t.card10_4_header,
      cardContext: t.card10_4_context,
      cardImage: image11,
    },
    {
      cardLogo: <HiOutlineViewGrid />,
      cardHeader: t.card10_5_header,
      cardContext: t.card10_5_context,
    },
  ];
  const cardData11 = [
    {
      cardHeader: t.card11_header,
      cardContext: t.card11_context,
    },
  ];
  const cardData12 = [
    {
      cardImage: image12,
      cardHeader: t.card12_1_header,
      cardContext: t.card12_1_context,
    },
    {
      cardImage: image13,
      cardHeader: t.card12_2_header,
      cardContext: t.card12_2_context,
    },
    {
      cardImage: image14,
      cardHeader: t.card12_3_header,
      cardContext: t.card12_3_context,
    },
  ];
  const cardData13 = [
    {
      cardHeader: t.card13_header,
      cardContext: t.card13_context,
    },
  ];
  const cardData14 = [
    {
      cardLogo: <BsBox />,
      cardHeader: t.card14_1_header,
      cardContext: t.card14_1_context,
    },
    {
      cardLogo: <BsBox />,
      cardHeader: t.card14_2_header,
      cardContext: t.card14_2_context,
    },
    {
      cardLogo: <BsBox />,
      cardHeader: t.card14_3_header,
      cardContext: t.card14_3_context,
    },
  ];

  return (
    <div className="context-container">
      <div className="section-1">
        {cardData1.map((card1, index) => (
          <Card_h1 key={index} {...card1} />
        ))}
      </div>
      <div className="section-2">
        <div className="card2">
          {cardData2.map((card2, index) => (
            <Card_h1 key={index} {...card2} />
          ))}
        </div>
        <div className="card3">
          {cardData3.map((card3, index) => (
            <Card_h3
              className={`card3-${index} `}
              key={index}
              cardLogo={card3.cardLogo}
              cardHeader={card3.cardHeader}
              cardContext={card3.cardContext}
              cardImage={card3.cardImage}
            />
          ))}
        </div>
      </div>
      <div className="section-3">
        {cardData4.map((card4, index) => (
          <Card6
            className="card4"
            key={index}
            cardHeader={card4.cardHeader}
            cardLogo={card4.cardLogo}
            cardImage={card4.cardImage}
          />
        ))}
      </div>
      {cardData5.map((card5, index) => (
        <Card_h2 key={index} {...card5} />
      ))}
      <div className="section-4">
        {cardData6.map((card6, index) => (
          <Card_h3 key={index} className={`card6-${index} `} {...card6} />
        ))}
      </div>
      <div className="section-5">
        <div className="card7">
          {cardData7.map((card7, index) => (
            <Card_h2 key={index} {...card7} />
          ))}
        </div>
        <div className="section5-buttons">
          <button className="section5-left-button">
            <FiArrowLeft />
          </button>
          <button className="section5-right-button">
            <FiArrowRight />
          </button>
        </div>
      </div>
      <div className="section-6">
        {cardData8.map((card8, index) => (
          <Card_h2 key={index} {...card8} />
        ))}
      </div>
      {cardData9.map((card9, index) => (
        <Card_h2 key={index} {...card9} />
      ))}
      <div className="section-7">
        {cardData10.map((card10, index) => (
          <Card_h3 key={index} className={`card10-${index} `} {...card10} />
        ))}
      </div>

      {cardData11.map((card11, index) => (
        <Card_h2 key={index} {...card11} />
      ))}
      <div className="section-8">
        {cardData12.map((card12, index) => (
          <Card4 key={index} {...card12} className={`card12-${index} `} />
        ))}
      </div>

      <div>
        {cardData13.map((card13, index) => (
          <Card_h2 key={index} {...card13} />
        ))}
        <div className="section-9">
          {cardData14.map((card14, index) => (
            <Card5
              key={index}
              cardLogo={card14.cardLogo}
              cardHeader={card14.cardHeader}
              cardContext={card14.cardContext}
            />
          ))}
        </div>
      </div>
      <button className="see-all-button">{t.see_all_button}</button>
    </div>
  );
}

export default Context;
