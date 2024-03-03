import "./HiddenMenu.css"
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { navigations } from "../../Data/datas";
import { Link } from "react-scroll";
import menuStore from "../../store/menuStore";

const HiddenMenu = () => {
    const store = menuStore();
  return (
    <div className="hidden-menu">
      <IoArrowBackCircleOutline className="exit" onClick={() => store.setShow()} />
      {navigations.map((item) => (
        <Link
          onClick={store.setShow}
          key={item.name}
          to={item.to}
          smooth={true}
          offset={0}
          duration={500}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export default HiddenMenu