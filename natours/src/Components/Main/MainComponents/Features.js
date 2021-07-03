import "../../../icon-font.css";

const Features = () => {
  return (
    <section className="section-features flex-column-center">
      <div className="flex-row-between features-cards-wrapper row">
        <div className="feature-box col-20">
          <i className="feature-box__icon icon-basic-world"></i>
          <h3 className="heading-tertiary marg-bot-small">Explore the world</h3>
          <p className="feature-box__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
          </p>
        </div>
        <div className="feature-box col-20">
          {" "}
          <i className="feature-box__icon icon-basic-compass"></i>
          <h3 className="heading-tertiary marg-bot-small">Meet Nature</h3>
          <p className="feature-box__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
          </p>
        </div>
        <div className="feature-box col-20">
          {" "}
          <i className="feature-box__icon icon-basic-map"></i>
          <h3 className="heading-tertiary marg-bot-small">Find your way</h3>
          <p className="feature-box__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
          </p>
        </div>
        <div className="feature-box col-20">
          {" "}
          <i className="feature-box__icon icon-basic-heart"></i>
          <h3 className="heading-tertiary marg-bot-small">Live a healthier life</h3>
          <p className="feature-box__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
