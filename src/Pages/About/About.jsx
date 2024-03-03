import "./About.css";
import regularFlavor from "../../images/regularFlavor.png"
import spicyFlavor from "../../images/spicyFlavorCircle.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../../Data/sliderSettings";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { marketings } from "../../Data/datas";

const About = () => {
  return (
    <div className="about w100">
      <div className="about-product flexCSB">
        <div className="product-image box1">
          <img src={regularFlavor} alt="regular flavor" />
        </div>
        <div className="about-pastil flexCol flexCSB">
          <h1>Pastil</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            deserunt provident neque quam aut harum, voluptates, assumenda
            possimus laboriosam, ipsam sed quaerat eos? Voluptatum facilis rem
            harum modi, hic sed dolore eum labore, ducimus explicabo iure
            dignissimos aperiam provident sapiente, eveniet consequatur velit
            magnam quisquam? Minus omnis nostrum impedit nesciunt laudantium
            repudiandae labore tempore quisquam cupiditate earum soluta ipsum
            similique, atque hic. Qui, harum repellat officia eos, cupiditate
            tempora modi magni officiis obcaecati quibusdam molestiae fuga et
            fugiat unde a error sed. Maxime eligendi praesentium culpa, quisquam
            aliquam eius unde quos omnis impedit facere quaerat quod dolore
            veritatis excepturi reprehenderit.
          </p>
        </div>
        <div className="product-image">
          <img src={spicyFlavor} alt="regular flavor" />
        </div>
      </div>
      <div className="marketing-label">
        <h1>MARKETING</h1>
      </div>
      <div className="marketing-boxes">
        <Swiper
          spaceBetween={20}
          {...sliderSettings}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {marketings.map((item) => (
            <SwiperSlide key={item.image}>
              <div className="marketing-box">
                <img src={item.image} alt="marketing" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default About