import "./HomePage.css";
import regularPastil from "../../images/regulartPastil.png";
import spictyPastil from "../../images/spictyPastil.png";
import Nav from "../../components/Nav/Nav";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <>
      <div className="home-page flexCSB h100">
        <div className="nav-area">
          <Nav />
        </div>
        <motion.div
          className="box"
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="home-design">
            <img src={spictyPastil} alt="regular pastil logo" />
          </div>
        </motion.div>
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="home-page-content flexCenter flexCol">
            <h1>CHICKEN PASTIL</h1>
            <h1>FOR YOU</h1>
            <p>CERTIFIED HALAL</p>
            <button className="order-now">Order Now</button>
          </div>
        </motion.div>
        <motion.div
          className="box"
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="home-design">
            <img src={regularPastil} alt="regular pastil logo" />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default HomePage;
