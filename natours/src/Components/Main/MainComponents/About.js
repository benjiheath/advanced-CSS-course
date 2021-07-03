import nat1L from "../../../img/nat-1-large.jpg";
import nat2L from "../../../img/nat-2-large.jpg";
import nat3L from "../../../img/nat-3-large.jpg";
import nat1 from "../../../img/nat-1.jpg";
import nat2 from "../../../img/nat-2.jpg";
import nat3 from "../../../img/nat-3.jpg";

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

        {/* resolution switching */}

        <div className="about-img-wrapper col-45">
          <div className="composition">
            <img
              srcSet={`${nat1} 300w, ${nat1L} 1000w`}
              sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
              className="composition__photo composition__photo--p1"
              alt=""
              src={nat1}
            />
            <img
              srcSet={`${nat2} 300w, ${nat2L} 1000w`}
              sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
              className="composition__photo composition__photo--p2"
              alt=""
              src={nat2}
            />
            <img
              srcSet={`${nat3} 300w, ${nat3L} 1000w`}
              sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
              className="composition__photo composition__photo--p3"
              alt=""
              src={nat3}
            />

            {/* <img src={nat1L} alt="" className="composition__photo composition__photo--p1" />
            <img src={nat2L} alt="" className="composition__photo composition__photo--p2" />
            <img src={nat3L} alt="" className="composition__photo composition__photo--p3" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
