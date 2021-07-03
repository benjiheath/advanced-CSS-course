const Button = ({ type, text, additionalCSS, href }) => {
  const getCSS = () => {
    switch (type) {
      case "anim":
        return "btn btn--white btn--animated";
      case "anim-green":
        return "btn btn--green btn--animated";
      case "text":
        return "btn-text";
      default:
        return "btn";
    }
  };

  return (
    <a href={href} className={`${getCSS()} ${additionalCSS}`}>
      {text}
    </a>
  );
};

export default Button;
