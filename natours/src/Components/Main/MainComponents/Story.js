const Story = ({ img, title, name }) => {
  return (
    <div className="story">
      <figure className="story__shape">
        <img src={img} alt="person on a tour" className="story__img" />
        <figcaption className="story__caption">{name}</figcaption>
      </figure>
      <div className="story__text">
        <h3 className="heading-tertiary marg-bot-small">{title}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iusto aliquam ab provident
          exercitationem voluptatem? Ipsum nihil, impedit non doloremque quod repellendus harum, fugiat autem
          optio, suscipit mollitia consequuntur atque? Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
      </div>
    </div>
  );
};

export default Story;
