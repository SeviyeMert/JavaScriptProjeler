import "../css/Sidebar.css";
// Navbar'dan taşınan bileşenleri import ediyoruz
import AddProjectButton from "./AddProjectButton";
import ListButton from "./ListButton";
import BoardButton from "./BoardButton";
import CalendarButton from "./CalendarButton";
import TableButton from "./TableButton";
import { GoPlus } from "react-icons/go"; // İhtiyaç olursa

function Menu({ menuOpen, handleToggle }) {
  return (
    <>
      <nav
        id="nav"
        className={`${menuOpen ? "active" : ""}`}
        onClick={handleToggle}
      >
        <button className="icon" id="toggle" onClick={handleToggle}>
          <div className="line line1"></div>
          <div className="line line2"></div>
        </button>

        <ul>
          <li>
            <input className="search" type="text" placeholder="   Search" />
          </li>
          {/* İstenen Navbar menü öğeleri buraya taşındı */}
          <li>
            <AddProjectButton />
          </li>
          <li>
            <ListButton />
          </li>
          <li>
            <BoardButton />
          </li>
          <li>
            <CalendarButton />
          </li>
          <li>
            <TableButton />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
