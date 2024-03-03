import "./HomePage.css";
import regularPastil from "../../images/regulartPastil.png";
import spictyPastil from "../../images/spictyPastil.png";
import Nav from "../../components/Nav/Nav";

const HomePage = () => {
  return (
    <>
      <div className="home-page flexCSB h100">
        <div className="nav-area">
          <Nav/>
        </div>
        <div className="home-design">
          <img src={spictyPastil} alt="regular pastil logo" />
        </div>
        <div className="home-page-content flexCenter flexCol">
          <h1>CHICKEN PASTIL</h1>
          <h1>FOR YOU</h1>
          <p>CERTIFIED HALAL</p>
          <button className="order-now">Order Now</button>
        </div>
        <div className="home-design">
          <img src={regularPastil} alt="regular pastil logo" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
