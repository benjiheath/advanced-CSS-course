import logo1 from "../img/logo-green-1x.png";
import logo2 from "../img/logo-green-2x.png";
import logoSmall1 from "../img/logo-green-small-1x.png";
import logoSmall2 from "../img/logo-green-small-2x.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        {/* art direction & density switching */}
        <picture className="footer__logo">
          <source srcSet={`${logoSmall1} 1x, ${logoSmall2} 2x`} media="(max-width: 600px)" />
          <img srcSet={`${logo1} 1x, ${logo2} 2x`} alt="Full logo" className="footer__logo" />
        </picture>
      </div>
      <div className="row flex-row-between-start footer-wrapper ">
        <div className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#" className="footer__link">
                Company
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Contact us
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Careers
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Privacy Policy
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Terms
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__text-wrapper">
          <p className="footer__text">
            Designed by
            <a
              className="footer__link"
              href="https://www.udemy.com/user/jonasschmedtmann/"
              rel="noreferrer"
              target="_blank"
            >
              Jonas Schmedtmann
            </a>{" "}
            and built in this instance by{" "}
            <a className="footer__link" href="https://github.com/benjiheath" rel="noreferrer" target="blank">
              Ben Heath
            </a>
            , by following Jonas's{" "}
            <a
              className="footer__link"
              href="https://www.udemy.com/course/advanced-css-and-sass/"
              rel="noreferrer"
              target="blank"
            >
              Advanced CSS course.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
