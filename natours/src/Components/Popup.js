import Button from "./Button";
import img1 from "../img/nat-8.jpg";
import img2 from "../img/nat-9.jpg";

const Popup = () => {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src={img1} alt="Tour photo" className="popup__img" />
          <img src={img2} alt="Tour photo" className="popup__img" />
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary marg-bot-small">Start booking now</h2>
          <h3 className="heading-tertiary marg-bot-small">
            Important &ndash; Please read these terms before booking
          </h3>
          <p className="popup__text">
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Sed sed risus pretium quam. Aliquam sem et tortor consequat id. Volutpat
            odio facilisis mauris sit amet massa vitae. Mi bibendum neque egestas congue. Placerat orci nulla
            pellentesque dignissim enim sit. Vitae semper quis lectus nulla at volutpat diam ut venenatis.
            Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Proin fermentum leo vel
            orci porta non pulvinar neque laoreet. Gravida neque convallis a cras semper. Molestie at
            elementum eu facilisis sed odio morbi quis. Faucibus vitae aliquet nec ullamcorper sit amet risus
            nullam eget. Nam libero justo laoreet sit.
          </p>
          <Button text="Book Now" type="anim-green" />
        </div>
      </div>
    </div>
  );
};

export default Popup;
