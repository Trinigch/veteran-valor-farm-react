import "./GiveMN.css";
import donateImage from "../assets/Imagenes/Donate.png";

const GiveMN = () => {
  return (
    <main className="donate-page">

      {/* =========================
          PAGE HEADER
      ========================= */}

      <header className="donate-header">

        <h1>Donate</h1>

        <a
          href="https://veteranvalorfarm.org/checkout/donate?donatePageId=6589f6eabf81a44243793d2f"
          className="donate-top-button"
          >
          DONATE
          </a>

      </header>


      {/* =========================
          MAIN CONTENT
      ========================= */}

      <section className="donate-section">

        {/* LEFT */}

        <div className="donate-content">

          <h2>Make a contribution by Mail</h2>

          <p>
            Veteran Valor Farm
            <br />
            19206 County Rd 132
            <br />
            Brainerd, MN 56401
          </p>


          <h2>Make a Donation of Equipment or Land</h2>

          <p>
            For more information about a donation of equipment or land,
            please contact Matthew Lovitz at{" "}
            <a href="mailto:Mlovitz@veteranvalorfarm.org">
              Mlovitz@veteranvalorfarm.org
            </a>
          </p>


          <h2>Planned Giving</h2>

          <p>
            To give to Veteran Valor Farm posthumously, please remember us
            in your will and trusts. Planned giving is an incredible way
            to leave a lasting legacy and support this great cause.
          </p>


          <h2>Make your Gift of Livestock</h2>

          <p>
            For more information about a donation of livestock,
            please contact Matthew Lovitz at{" "}
            <a href="mailto:Mlovitz@veteranvalorfarm.org">
              Mlovitz@veteranvalorfarm.org
            </a>
          </p>

        </div>


        {/* RIGHT */}

        <div className="donate-image">

          <img
            src={donateImage}
            alt="Veteran Valor Farm community"
          />

        </div>

      </section>


      {/* =========================
          BOTTOM BUTTON
      ========================= */}

      <div className="donate-bottom">

        <a
          href="https://www.givemn.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="donate-bottom-button"
        >
          Donate
        </a>

      </div>

    </main>
  );
};

export default GiveMN;