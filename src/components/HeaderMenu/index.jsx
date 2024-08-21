import "./index.css";

const HeaderMenu = (props) => {
  return (
    <>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#">Logo</a>
          </li>
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-item">
            <a href="#">about</a>
          </li>
          <li className="nav-item">
            <a href="#">contact</a>
          </li>
        </ul>
        <div className="btn-form">
          <a className="btn" href="#">
            {props.name}
          </a>
        </div>
      </nav>
    </>
  );
};

export default HeaderMenu;
