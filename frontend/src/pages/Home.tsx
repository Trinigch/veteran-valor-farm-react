import "./Home.css";

import giveImage from "../assets/Imagenes/givme.png";
import farmImage from "../assets/Imagenes/farm.png";
import farm1Image from "../assets/Imagenes/farm1.png";
import farm2Image from "../assets/Imagenes/farm2.png";

const Home = () => {
  return (
    <main className="home">

      {/* =========================
          HERO
      ========================= */}

      <section className="hero">

        <div className="hero-overlay">

          <div className="hero-content">

            <h1>
              Veterans helping veterans get back on their feet
            </h1>

            <p>
              Veteran Valor uses a farming environment to encourage
              internal growth, skill development and motivation to live
              at a standard/quality of life veterans deserve.
              Farm serves as a supportive agricultural community where
              camaraderie is the antidote to isolation, loneliness,
              and transition struggles.
            </p>

            <p>
              Here, veterans do more than just find a place to stay.
              They rediscover a renewed sense of purpose, live in a
              tight-knit community, and actively contribute to a working
              farm while building skills for a sustainable quality of life.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          GIVE MN
      ========================= */}

      <section className="give-section">

        <div className="give-content">

          <h2>
            A partner with GiveMN.org
          </h2>

          <p>
            A 501 (c)(3) Non-Profit
            <span className="ein-spacing">
              EIN 81-2805055
            </span>
          </p>

          <img
            src={giveImage}
            alt="GiveMN"
            className="give-image"
          />

        </div>

      </section>


      {/* =========================
          FARM INTRODUCTION
      ========================= */}

      <section className="farm-section">

        <div className="farm-image-container">

          <img
            src={farmImage}
            alt="Veteran Valor Farm"
            className="farm-image"
          />

        </div>

        <div className="farm-text">

          <h2>
            VETERAN VALOR FARM
          </h2>

          <p>
            Veterans assisting other veterans to get back on their
            feet through agricultural growth, skill development,
            and community support.
          </p>

          <p>
            Veteran Valor Farm is a registered 501(c)(3) tax-exempt
            non-profit organization.
          </p>

          <p>
            EIN: 81-2805055
          </p>

        </div>

      </section>


      {/* =========================
          FARM GALLERY
      ========================= */}

      <section className="farm-gallery">

        <div className="farm-gallery-item">

          <img
            src={farm1Image}
            alt="Veteran Valor Farm"
          />

        </div>

        <div className="farm-gallery-item">

          <img
            src={farm2Image}
            alt="Veteran Valor Farm"
          />

        </div>

      </section>

    </main>
  );
};

export default Home;