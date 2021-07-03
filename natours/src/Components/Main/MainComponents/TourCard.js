import Button from "../../Button";

const TourCard = ({ id, title, list, price }) => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className={`card__picture card__picture--${id}`}></div>
        <h4 className="card__heading">
          <span className={`card__heading-span card__heading-span--${id}`}>{title}</span>
        </h4>
        <div className="card__details">{list}</div>
      </div>
      <div className={`card__side card__side--back card__side--back-${id}`}>
        <div className="card__cta">
          <div className="card__price-box">
            <p className="card__price-only">Only</p>
            <p className="card__price-value">${price}</p>
          </div>
          <Button type="anim" text="Book Now!" href="#popup" />
        </div>
      </div>
    </div>
  );
};

export default TourCard;
