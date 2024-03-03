import "./Footer.css";
import logo from "../../images/jayTrippersLogo.png";
import spicy from "../../images/spictyPastil.png";
import regular from "../../images/regulartPastil.png";
import { contacts } from "../../Data/datas";

const Footer = () => {
    return (
      <div className="footer flexCenter w100">
        <div className="logo-image flex">
          <img src={logo} alt="logo" />
          <img src={spicy} alt="spicy" />
          <img src={regular} alt="regular" />
        </div>
        <div className="socials flex">
          {contacts.map((item) => (
            <a href={item.link}>{item.title}</a>
          ))}
        </div>
      </div>
    );
}

export default Footer