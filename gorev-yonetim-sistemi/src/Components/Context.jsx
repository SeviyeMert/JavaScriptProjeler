import React from "react";
import Card_h1 from "../pages/Card-h1";
import Card_h2 from "../pages/Card-h2";
import Card_h3 from "../pages/Card-h3";
import Card4 from "../pages/Card4";
import Card5 from "../pages/Card5";
import image1 from "../images/section1-image1.png";
import { HiOutlineViewGrid } from "react-icons/hi";
import image2 from "../images/section2-image1.png";
import { PiPlanet } from "react-icons/pi";
import image3 from "../images/section2-image1.png";
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
import image14 from "../images/section8-image3.png";

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
  const cardData4 = [
    {
      cardHeader: "Tackle work from any angle with 15+ powerful views.",
      cardContext: "hhfhrfhh", // Buraya bak
      cardImage: image5, //Buraya bak
    },
  ];
  const cardData5 = [
    {
      cardHeader: "Customize ClickUp for any need, no code required.",
      cardContext:
        "Everything in ClickUp can be easily customized to manage any type of project, no code or add-ons required.",
    },
  ];
  const cardData6 = [
    {
      cardLogo: <IoOptionsOutline />,
      cardHeader: "ClickApps",
      cardContext:
        "Tailor your tasks for any work need with 35+ ClickApps that each add different functionalities. Save time with task Automations, assign Sprint Points, add Custom Fields, and more",
      cardImage: image6,
    },
    {
      cardLogo: <IoOptionsOutline />,
      cardHeader: "Automations",
      cardContext:
        "Automate routine work and processes with 50+ actions, triggers, and conditions. Use pre-built automation recipes or customize them based on your needs.",
    },
    {
      cardLogo: <IoOptionsOutline />,
      cardHeader: "Templates",
      cardContext:
        "Save time by leveraging hundreds of templates for team use cases, views, tasks checklists, Docs, and more.",
      cardImage: image6n1,
    },
    {
      cardLogo: <IoOptionsOutline />,
      cardHeader: "Relationships",
      cardContext:
        "Create the perfect visual database with Relationships. Link tasks, documents, integrations and more to access everything you need in one place.",
      cardImage: image6n2,
    },
    {
      cardLogo: <IoOptionsOutline />,
      cardHeader: " Integrations",
      cardContext:
        "ClickUp integrates with over 1,000 of your favorite tools. Sync your team calendars, messaging apps, cloud storage, and more to keep all of your tools in one place",
    },
  ];
  const cardData7 = [
    {
      cardHeader: "Collaborate on anything with your team.",
      cardContext:
        "Streamline teamwork with powerful collaboration features that make it easy to work together on any type of project.",
      cardImage: image7,
    },
  ];
  const cardData8 = [
    {
      cardHeader: "Document and share anything with your team.",
      cardContext:
        "Collaborate on product ideas, document bugs, or jot down meeting minutes with ClickUp Docs. Edit in real-time with others, add rich editing, and keep everyone up-to-date with a visual knowledge base.",
      cardImage: image8,
    },
  ];

  const cardData9 = [
    {
      cardHeader: "Stay on track with real-time reporting.",
      cardContext:
        "Set goals, track progress, and manage resources more effectively with powerful reporting features.",
    },
  ];
  const cardData10 = [
    {
      cardLogo: <HiOutlineViewGrid />,
      cardHeader: "Dashboards",
      cardContext:
        "Bring important project indicators into one place with Dashborads.",
      cardImage: image9,
    },
    {
      cardLogo: <HiOutlineViewGrid />,
      cardHeader: "Workload & Box view",
      cardContext:
        "Visualize your team's day-by-day work capacity with Workload and Box views. See who is under or over capacity to reduce bottlenecks and allocate resources effectively.",
    },
    {
      cardLogo: <HiOutlineViewGrid />,
      cardHeader: "Goals",
      cardContext:
        "Measure your project goals by tying them to specific tasks, numbers, monetary values, and more. Organize your OKRs and Sprints into Goal Folders and automatically track your progress for linked tasks.",
      cardImage: image10,
    },
    {
      cardLogo: <HiOutlineViewGrid />,
      cardHeader: "Milentones",
      cardContext:
        "Set milentones to signify when an important stage in the project is complete.",
      cardImage: image11,
    },
    {
      cardLogo: <HiOutlineViewGrid />,
      cardHeader: "Pulse",
      cardContext:
        "View automatic activity reports powered by machine learning to easily see where your time is being spent.",
      cardImage: "",
    },
  ];
  const cardData11 = [
    {
      cardHeader: "Time management made easy.",
      cardContext:
        "Make the most of your time with global Time Tracking from any device, Time Estimates, and time Reporting.",
    },
  ];
  const cardData12 = [
    {
      cardImage: image12,
      cardHeader: "Tracking",
      cardContext:
        "Track time automatically (or manually) link it to tasks from your desktop, mobile, or browser with ClickUp's global timer.",
    },
    {
      cardImage: image13,
      cardHeader: "Estimates",
      cardContext:
        "Add time estimates to tasks to allocate resources smarter and set expectations for your team.",
    },
    {
      cardImage: image14,
      cardHeader: "Reporting",
      cardContext:
        "Access detailed reporting for time tracked and automatically create reports for billable time.",
    },
  ];
  const cardData13 = [
    {
      cardHeader: "But wait, there's more.",
      cardContext:
        "ClickUp comes with hundreds of more features to help your team tackle any type of work, check them all out below.",
    },
  ];
  const cardData14 = [
    {
      cardLogo: <HiOutlineViewGrid />,
      cardHeader: "Task Management",
      cardContext: [
        "Recurring Checklists",
        "Reminders",
        "Resolve Comments",
        "Scrum Points",
        "Status Templates",
      ],
    },
    {
      cardLogo: <HiOutlineViewGrid />,
      cardHeader: "Complete Customization",
      cardContext: [
        "Custom Fields",
        "Custom Statuses",
        "Customize Assignees",
        "Filter and Search Tasks",
        "Hotkeys & Shortcuts",
      ],
    },
    {
      cardLogo: <HiOutlineViewGrid />,
      cardHeader: "Team Collaboration",
      cardContext: [
        "2-Way Calender Sync",
        "Capture,Mark Up, and Edit Screenshots",
        "List Details & Discussions",
        "Mentions",
        "Real-Time Editing",
      ],
    },
  ];

  return (
    <div>
      <div className="section-1">
        {cardData1.map((card1, index) => (
          <Card_h1 key={index} {...card1} />
        ))}
      </div>
      <div className="section-2">
        {cardData2.map((card2, index) => (
          <Card_h1 key={index} {...card2} />
        ))}
        {cardData3.map((card3, index) => (
          <Card_h3 key={index} {...card3} />
        ))}
      </div>
      <div className="section-3">
        {cardData4.map((card4, index) => (
          <Card_h2
            key={index}
            cardHeader={card4.cardHeader}
            cardContext={card4.cardContext} //
            cardImage={card4.cardImage} //
          />
        ))}
      </div>
      <div className="section-4">
        {cardData5.map((card5, index) => (
          <Card_h2 key={index} {...card5} />
        ))}
        {cardData6.map((card6, index) => (
          <Card_h3 key={index} {...card6} />
        ))}
      </div>
      <div className="section-5">
        <div>
          {cardData7.map((card7, index) => (
            <Card_h2 key={index} {...card7} />
          ))}
        </div>
        <button
          style={{
            backgroundColor: "white",
            height: "30px",
            width: "30px",
            borderRadius: "20px",
            border: "1px solid skyBlue",
          }}
        >
          <FiArrowLeft />
        </button>
        <button
          style={{
            backgroundColor: "white",
            height: "30px",
            width: "30px",
            borderRadius: "20px",
            border: "1px solid skyBlue",
          }}
        >
          <FiArrowRight />
        </button>
      </div>
      <div className="section-6">
        {cardData8.map((card8, index) => (
          <Card_h2 key={index} {...card8} />
        ))}
      </div>

      <div className="section-7">
        {cardData9.map((card9, index) => (
          <Card_h2 key={index} {...card9} />
        ))}
        {cardData10.map((card10, index) => (
          <Card_h3 key={index} {...card10} />
        ))}
      </div>

      <div className="section-8">
        {cardData11.map((card11, index) => (
          <Card_h2 key={index} {...card11} />
        ))}
        {cardData12.map((card12, index) => (
          <Card4 key={index} {...card12} />
        ))}
      </div>

      <div className="section-9">
        <div>
          {cardData13.map((card13, index) => (
            <Card_h2 key={index} {...card13} />
          ))}
          {cardData14.map((card14, index) => (
            <Card5
              key={index}
              cardLogo={card14.cardLogo}
              cardHeader={card14.cardHeader}
              cardContext={card14.cardContext}
            />
          ))}
        </div>
        <button className="see-all-button">See All Features</button>
      </div>
    </div>
  );
}

export default Context;
