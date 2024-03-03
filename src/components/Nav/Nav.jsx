import "./Nav.css";
import jayTrippersLogo from "../../images/jayTrippersLogo.png";
import { Link } from "react-scroll";
import { IoMenuSharp } from "react-icons/io5";
import { navigations, contacts } from "../../Data/datas";
import HiddenMenu from "../HiddenMenu/HiddenMenu";
import menuStore from "../../store/menuStore";

const Nav = () => {
  const store = menuStore();
  let show = store.show;

  return (
    <div className="navigation-container">
      <div className="nav">
        <div className="navigation-list">
          {navigations.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              offset={0}
              duration={500}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="logo-container">
          <img src={jayTrippersLogo} alt="jay Trippers Logo" />
        </div>
        <div className="contacts">
          {contacts.map((item) => (
            <a key={item.link} href={item.link} className="icon">
              {item.title}
            </a>
          ))}
        </div>
        <IoMenuSharp className="burger" onClick={() => store.setShow()} />
      </div>
      {show && <HiddenMenu className="HIDDEN"/>}
    </div>
  );
};

export default Nav;
