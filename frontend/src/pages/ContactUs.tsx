import "./ContactUs.css";
import contactImage from "../assets/Imagenes/ContactUs.png";

const ContactUs = () => {
  return (
    <main className="contact-page">

      <section className="contact-section">

        {/* =========================
            CONTACT FORM
        ========================= */}

        <div className="contact-form-container">

          <h1>Contact Us</h1>

          <form className="contact-form">

            {/* NAME */}

            <fieldset>

              <legend>Name</legend>

              <div className="name-fields">

                <div className="form-field">

                  <label htmlFor="firstName">
                    First Name
                    <span className="required">*</span>
                  </label>

                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                  />

                </div>


                <div className="form-field">

                  <label htmlFor="lastName">
                    Last Name
                    <span className="required">*</span>
                  </label>

                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                  />

                </div>

              </div>

            </fieldset>


            {/* EMAIL */}

            <div className="form-field">

              <label htmlFor="email">
                Email
                <span className="required">*</span>
              </label>

              <input
                type="email"
                id="email"
                name="email"
                required
              />

            </div>


            {/* NEWSLETTER */}

            <div className="checkbox-field">

              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
              />

              <label htmlFor="newsletter">
                Sign up for news and updates
              </label>

            </div>


            {/* SUBJECT */}

            <div className="form-field">

              <label htmlFor="subject">
                Subject
                <span className="required">*</span>
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                required
              />

            </div>


            {/* MESSAGE */}

            <div className="form-field">

              <label htmlFor="message">
                Message
                <span className="required">*</span>
              </label>

              <textarea
                id="message"
                name="message"
                rows={7}
                required
              />

            </div>


            {/* SUBMIT */}

            <button
              type="submit"
              className="contact-submit"
            >
              Send Message
            </button>

          </form>

        </div>


        {/* =========================
            IMAGE
        ========================= */}

        <div className="contact-image-container">

          <img
            src={contactImage}
            alt="Veteran Valor Farm"
            className="contact-image"
          />

        </div>

      </section>

    </main>
  );
};

export default ContactUs;