import "./MeetUs.css";

import presidentImage from "../assets/Imagenes/president.png";
import president2Image from "../assets/Imagenes/president2.png";
import volunteer1Image from "../assets/Imagenes/volunteer1.png";
import volunteer2Image from "../assets/Imagenes/volunteer2.png";

const MeetUs = () => {
  return (
    <main className="meet-us-page">

      {/* =========================
          HEADER
      ========================= */}

      <section className="meet-us-header">

        <h1>Meet Us</h1>

      </section>


      {/* =========================
          JEREMIAH
      ========================= */}

      <section className="member-section">

        <div className="member-image">

          <img
            src={presidentImage}
            alt="Jeremiah Peterson"
          />

        </div>

        <div className="member-text">

          <h2>Jeremiah Peterson</h2>

          <h3>
            Co-Founder, President and Operator
          </h3>

          <p>
            Jeremiah Peterson, Co-Founder, President and operator of VVF,
            is an Operation Iraqi Freedom Veteran, with a degree in Chemistry,
            and is a small business owner that can't stand to see a man down.
          </p>

          <p>
            A decade ago he started a still running Non-profit that helps
            veterans returning from war to transition into the college
            environment, the Veteran Transition Center.
          </p>

          <p>
            The center has been given several awards at the University of MN
            for their work with student veterans.
          </p>

          <p>
            At the same time, Jeremiah also helped found Student Veterans
            of America, a Student Veteran lobbying group that represents
            all university campus veteran groups concerned with veteran
            educational benefits and veteran concerns on campuses nationwide.
          </p>

          <a
            href="mailto:Jpeterson@veteranvalorfarm.org"
            className="member-email"
          >
            Jpeterson@veteranvalorfarm.org
          </a>

        </div>

      </section>


      {/* =========================
          MATT
      ========================= */}

      <section className="member-section">

        <div className="member-image">

          <img
            src={president2Image}
            alt="Matt Lovitz"
          />

        </div>

        <div className="member-text">

          <h2>Matt Lovitz</h2>

          <h3>
            Co-Founder, Board Member and Treasurer
          </h3>

          <p>
            Matt is an Operation Iraqi Freedom Veteran. Matt holds a degree
            in Economics and is a former small business owner.
          </p>

          <p>
            Matt hopes to use his business acumen to ensure the farms
            obligations to its donors are met and to ensure every dollar
            is invested wisely in supporting our veterans.
          </p>

          <a
            href="mailto:Mlovitz@veteranvalorfarm.org"
            className="member-email"
          >
            Mlovitz@veteranvalorfarm.org
          </a>

        </div>

      </section>


      {/* =========================
          BEN
      ========================= */}

      <section className="member-section">

        <div className="member-image">

          <img
            src={volunteer1Image}
            alt="Ben Eltgroth"
          />

        </div>

        <div className="member-text">

          <h2>Ben Eltgroth</h2>

          <p>
            Ben seized the opportunity to join the team to assist with the
            goals of VVF to give back to the community that protects our
            freedoms in which all of us enjoy each and every day.
          </p>

          <p>
            It's an honor to see guys get the assistance they need to be able
            to enjoy life once again.
          </p>

          <p>
            Born and raised here in MN. A System Administrator in IT.
          </p>

          <p>
            Some of my hobbies are building computers, gaming, hunting,
            car shows (both participant and viewing), disc golfing, and
            smoking meat.
          </p>

        </div>

      </section>


      {/* =========================
          CURTIS
      ========================= */}

      <section className="member-section">

        <div className="member-image">

          <img
            src={volunteer2Image}
            alt="Curtis Lovitz"
          />

        </div>

        <div className="member-text">

          <h2>Curtis Lovitz</h2>

          <p>
            Hi, I’m Curt Lovitz – I admire the ambition and dedication of
            our team members who have started the Veteran Valor Farm,
            providing a home for those Vets who don’t have one.
          </p>

          <p>
            I’ve lived in Minnesota for most of my entire life, and enjoy
            all outdoor activities, hunting, fishing, hiking, etc.
          </p>

          <p>
            I hope to help our veterans enjoy the same while offering them
            a safe haven. A place for healing in a natural environment so
            they are able to get their hearts and hands in a better place.
          </p>

          <p>
            I am currently employed by The Babinski Foundation Animal Shelter
            and hope to find a loving forever home for our animals and a
            companion for our veterans.
          </p>

        </div>

      </section>


      {/* =========================
          JOSH — NO IMAGE
      ========================= */}

      <section className="member-section member-no-image">

        <div className="member-text">

          <h2>Josh Dixon</h2>

          <p>
            As an avid hunter and outdoorsman, I also enjoy working with
            clients looking at raw land, lake lots and acreage, either for
            recreation, investment, or building their future “Dream Home.”
          </p>

          <p>
            Around the area I’m known as the “Earth Mover,” not only for
            the properties I’ve sold, but also for my “down to earth attitude.”
          </p>

          <p>
            My approach to Buying or Selling a home is; Keep it Simple,
            Make People Comfortable, and Educated in the process.
          </p>

          <p>
            As a result, 80% of my business is repeat clients, or referrals
            by satisfied customers.
          </p>

        </div>

      </section>

    </main>
  );
};

export default MeetUs;