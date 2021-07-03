import TourCard from "./TourCard";
import Button from "../../Button";

const Tours = () => {
  return (
    <div className="section-tours">
      <h2 className="heading-secondary marg-bot-med">Most popular tours</h2>
      <div className="row flex-row-between tour-card-wrapper">
        <TourCard id={card1.id} title={card1.title} list={card1.list()} price={card1.price} />
        <TourCard id={card2.id} title={card2.title} list={card2.list()} price={card2.price} />
        <TourCard id={card3.id} title={card3.title} list={card3.list()} price={card3.price} />
      </div>
      <Button type="anim-green" text="Discover all tours" additionalCSS="marg-top-large" />
    </div>
  );
};

export default Tours;

const card1 = {
  id: 1,
  title: "The sea explorer",
  list: function () {
    return (
      <ul>
        <li>3 day tours</li>
        <li>Up to 30 people</li>
        <li>2 tour guides</li>
        <li>Sleep in cozy hotels</li>
        <li>Difficulty: easy</li>
      </ul>
    );
  },
  price: 297,
};

const card2 = {
  id: 2,
  title: "The forest hiker",
  list: function () {
    return (
      <ul>
        <li>7 day tours</li>
        <li>Up to 40 people</li>
        <li>6 tour guides</li>
        <li>Sleep in provided tents</li>
        <li>Difficulty: medium</li>
      </ul>
    );
  },
  price: 497,
};

const card3 = {
  id: 3,
  title: "The snow adventurer",
  list: function () {
    return (
      <ul>
        <li>5 day tours</li>
        <li>Up to 15 people</li>
        <li>3 tour guides</li>
        <li>Sleep in provided tents</li>
        <li>Difficulty: hard</li>
      </ul>
    );
  },
  price: 897,
};
