import Story from "./Story";
import img1 from "../../../img/nat-8.jpg";
import img2 from "../../../img/nat-9.jpg";
import videoMp4 from "../../../img/video.mp4";
import videoWebm from "../../../img/video.webm";

const Stories = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={videoMp4} type="video/mp4" />
          <source src={videoWebm} type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
      <h2 className="heading-secondary marg-bot-med">We make people genuinely happy</h2>

      <Story img={img1} title={`"I had the best week ever with my family"`} name="Mary Smith" />
      <Story img={img2} title={`"Wow! my life is completely different now!"`} name="Jack Wilson" />

      <a href="#" className="btn-text">
        Learn more &rarr;
      </a>
    </section>
  );
};

export default Stories;
