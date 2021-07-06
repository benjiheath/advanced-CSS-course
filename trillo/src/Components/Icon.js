import sprite from "../img/sprite.svg";

const Icon = ({ icon, hw, color }) => {
  return (
    <svg style={{ height: `${hw}rem`, width: `${hw}rem`, fill: `${color}` }}>
      <use xlinkHref={`${sprite}#icon-${icon}`}></use>
    </svg>
  );
};

export default Icon;
