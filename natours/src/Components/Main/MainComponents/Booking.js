const Booking = () => {
  return (
    <section className="section-booking">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="#" className="form">
              <h2 className="heading-secondary marg-bot-4">start booking now</h2>
              <div className="form__group">
                <input id="name" type="text" placeholder="Full name" required className="form__input" />
                <label htmlFor="name" className="form__label">
                  Full name
                </label>
              </div>
              <div className="form__group">
                <input id="email" type="email" placeholder="Email address" required className="form__input" />
                <label htmlFor="email" className="form__label">
                  Email address
                </label>
              </div>
              <div className="form__group">
                <div className="form__radio-group marg-bot-small">
                  <input type="radio" id="small" className="form__radio-input" name="size" />
                  <label htmlFor="small" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Small tour group
                  </label>
                </div>
                <div className="form__radio-group">
                  <input type="radio" id="large" className="form__radio-input" name="size" />
                  <label htmlFor="large" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Large tour group
                  </label>
                </div>
              </div>
              <div className="form__group">
                <button className="btn btn--green">Next step &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
