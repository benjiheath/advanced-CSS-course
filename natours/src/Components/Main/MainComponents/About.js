import nat1L from "../../../img/nat-1-large.jpg";
import nat2L from "../../../img/nat-2-large.jpg";
import nat3L from "../../../img/nat-3-large.jpg";

const About = () => {
  return (
    <section className="section-about">
      <h2 className="heading-secondary marg-bot-med">Exciting tours for adventurous people</h2>

      <div className="row flex-row-between about-wrapper">
        <div className="about-text-wrapper  col-45">
          <h3 className="heading-tertiary marg-bot-small">You're going to fall in love with nature</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iusto aliquam ab provident
            exercitationem voluptatem? Ipsum nihil, impedit non doloremque quod repellendus harum, fugiat
            autem optio, suscipit mollitia consequuntur atque?
          </p>

          <h3 className="heading-tertiary marg-bot-small">Live adventures like you never have before</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iusto aliquam ab provident
            exercitationem voluptatem? Ipsum nihil, impedit.
          </p>
          <a href="#" className="btn-text">
            Learn more &rarr;
          </a>
        </div>

        <div className="about-img-wrapper col-45">
          <div className="composition">
            <img src={nat1L} alt="" className="composition__photo composition__photo--p1" />
            <img src={nat2L} alt="" className="composition__photo composition__photo--p2" />
            <img src={nat3L} alt="" className="composition__photo composition__photo--p3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
