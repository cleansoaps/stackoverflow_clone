import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav__container">
      <ul className="nav__ul">
        <li className="nav__home">Home</li>
        <li className="nav__public">
          PUBLIC
          <ul className="nav__public__ul">
            <li className="nav__public__questions">
              <i class="fa-solid fa-earth-americas"></i>Questions
            </li>
            <li>Tags</li>
            <li>Users</li>
            <li>Companies</li>
          </ul>
        </li>
        <li className="nav__collectives">
          COLLECTIVES
          <ul className="nav__collectives__ul">
            <li>Explore Collectives</li>
          </ul>
        </li>
        <li className="nav__teams">TEAMS</li>
        <li className="nav__stack">
          <ul className="nav__teams__ul">
            <li className="nav__teams__ul__li">
              <p>
                <span className="nav__teams__ul__li__bold">
                  Stack Overflow for Teams
                </span>
                – Start collaborating and <br></br>sharing organizational
                knowledge.
              </p>
              <button>Create a free Team</button>
              <span>Why Teams?</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
