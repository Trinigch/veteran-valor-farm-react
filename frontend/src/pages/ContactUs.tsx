import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";
import contactImage from "../assets/Imagenes/ContactUs.png";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactUs = () => {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    setIsSending(true);
    setStatus("idle");

    try {
      const response = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form,
        PUBLIC_KEY
      );

      console.log("EmailJS response:", response);

      if (response.status === 200) {
        // El email fue enviado correctamente
        setStatus("success");

        // Limpiar todos los campos del formulario
        form.reset();
      } else {
        setStatus("error");
      }

    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus("error");

    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="contact-page">

      <section className="contact-section">

        {/* CONTACT FORM */}

        <div className="contact-form-container">

          <h1>Contact Us</h1>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

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
                value="Yes"
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
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {/* SUCCESS */}

            {status === "success" && (
              <p className="success-message">
                Your message has been sent successfully!
              </p>
            )}

            {/* ERROR */}

            {status === "error" && (
              <p className="error-message">
                There was a problem sending your message. Please try again.
              </p>
            )}

          </form>

        </div>

        {/* IMAGE */}

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