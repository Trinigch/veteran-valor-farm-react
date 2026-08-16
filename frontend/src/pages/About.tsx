import "./About.css";

import image1 from "../assets/Imagenes/abiutvvf.png";
import image2 from "../assets/Imagenes/aboutvvf.png";
import image3 from "../assets/Imagenes/ab2tvvf.png";

const About = () => {
  return (
    <main className="about-page">

      {/* =========================
          HEADER
      ========================= */}

      <section className="about-header">

        <h1>About Veteran Valor Farm</h1>

        <p className="about-subtitle">
          What we aim to do and why we do it…
        </p>

      </section>


      {/* =========================
          COMBATING HOMELESSNESS
      ========================= */}

      <section className="about-content">

        <h2>Combating Veteran Homelessness</h2>

        <p>
          Veteran homelessness seems to be a perpetual problem here in the
          United States. With no end to war or violence in sight, it's about
          time we try new approaches to this age old problem.
        </p>

        <p>
          Veteran Valor brings veterans out of the woods, basements, garages
          and onto our farm to motivate them to live a quality, purposeful
          life. They are given the time and resources to straighten out their
          life and move forward with the knowledge and security that the farm
          and its community will always be there to support them.
        </p>


        <div className="about-item">

          <h3>Housing</h3>

          <p>
            Housing is only the first step in helping a homeless veteran.
            Being comfortable in your environment is important for success
            and motivation. Being able to participate with the farming
            activities and projects brings a feeling of accomplishment and
            community.
          </p>

        </div>


        <div className="about-item">

          <h3>Veteran Community</h3>

          <p>
            Being around other veterans will also motivate them to succeed.
            Having an organization of other veterans is very important for
            the mental health of veterans. Having this community of peers to
            call on for help while at the farm and anytime after, is very
            important for motivation and health.
          </p>

        </div>


        <div className="about-item">

          <h3>Work Selection</h3>

          <p>
            Many veterans feel like they don't fit into the regular work
            space. Many veterans don't even attempt to enter the work force
            because they feel there is not a job out there that they could
            do comfortably.
          </p>

          <p>
            We encourage them to look "outside of the box", and look for jobs
            they didn't even know existed. We have a list of jobs that are
            vet friendly, not because the employers are willing to hire vets,
            but because vets fit well in them.
          </p>

          <p>
            We plan on having each veteran intern at more than one job to find
            their perfect match.
          </p>

        </div>

      </section>


      {/* =========================
          IMAGE 1
      ========================= */}

      <section className="about-image-section">

        <img
          src={image1}
          alt="Veteran Valor Farm"
        />

      </section>


      {/* =========================
          FARMING / JOB SKILLS
      ========================= */}

      <section className="about-content">

        <div className="about-item">

          <h3>Farming</h3>

          <p>
            Though turning veterans into farmers is not our first priority,
            it is not beyond our reach. Unfortunately, becoming a farmer is
            a very expensive venture for one without land, let alone money.
          </p>

          <p>
            We find becoming a farmer more of a future goal if they so wish,
            as we want to concentrate on getting them stable for the time
            being, and then encourage them to get to where they want to be,
            doing what they want to do.
          </p>

        </div>


        <div className="about-item">

          <h3>Job Skills</h3>

          <p>
            We plan to teach the skills needed for many jobs right on the
            farm. Jobs that have plenty of openings and take less than six
            months of training or on the job training.
          </p>

          <p>
            We will assist veterans in finding and receiving the training
            they will need for the career they have decided on with our help.
          </p>

          <p>
            We also plan on utilizing all services out there, including the
            County Veteran Services Office.
          </p>

        </div>


        <div className="about-item">

          <h3>Future Support</h3>

          <p>
            Once we have stood the veteran up with a helping hand, dust him
            off and get him back to employment, it does not stop there.
          </p>

          <p>
            The farm will be a community that vets can always come back to,
            for socialization with other vets or for help in anything we can
            handle, even a brake job.
          </p>

        </div>


        <div className="about-item">

          <h3>Animal Therapy</h3>

          <p>
            Animal therapy has become a proven process for helping people
            achieve specific physical, social, cognitive and emotional
            goals. Somehow, the instinctual relationship between man and
            animal can be very healing.
          </p>

          <p>
            We have a unique relationship with a local equestrian therapy
            ranch and plan on developing our own dog based therapy.
          </p>

          <p className="therapy-highlight">
            Gaits Of Hope – Equine Assisted Psychotherapy
          </p>

          <p>
            Heal anxiety, depression, PTSD, TBI, trauma and transitioning
            after combat.
          </p>

          <p className="location-text">
            Sandy Knoll Farm, Rice, MN
          </p>

        </div>

      </section>


      {/* =========================
          IMAGE 2
      ========================= */}

      <section className="about-image-section">

        <img
          src={image2}
          alt="Veteran Valor Farm community"
        />

      </section>


      {/* =========================
          LOCAL COMMUNITY
      ========================= */}

      <section className="about-content final-content">

        <div className="about-item">

          <h3>Local Community Support</h3>

          <p>
            A support team of disciplined, trained men, that work well
            together, and have a sense of purpose over ones self is a
            horrible thing to waste.
          </p>

          <p>
            We hope to support many of the local charities and organizations
            with the workforce we have at hand.
          </p>

          <p>
            This will also serve to get our veterans off the farm for a
            change of scenery, to interact and network with the local
            communities.
          </p>

        </div>

      </section>


      {/* =========================
          IMAGE 3
      ========================= */}

      <section className="about-image-section about-final-image">

        <img
          src={image3}
          alt="Veteran Valor Farm"
        />

      </section>

    </main>
  );
};

export default About;