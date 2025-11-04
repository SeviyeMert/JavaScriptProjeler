import "../css/Sidebar.css";

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
          <li>
            <a href="./home">
              <button className="home">Home</button>
            </a>
          </li>
          <li>
            <a href="./works">
              <button className="works">Dashboards</button>
            </a>
          </li>
          <li>
            <a href="./about">
              <button className="about">Project</button>
            </a>
          </li>
          <li>
            <a href="./contact">
              <button className="contact">Tasks</button>
            </a>
          </li>
          <li>
            <a href="./reporting">
              <button className="reporting">Reporting</button>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
