
import "./Apply.css";
import helpingVetsImage from "../assets/Imagenes/helpingvets.png";

const Apply = () => {
  return (
    
    <main className="apply-page">

      {/* =========================
          PAGE TITLE
      ========================= */}

      <header className="apply-header">

        <h1>
          Veteran Valor Farm:
          <br />
          Growing Opportunities for Veterans
        </h1>

      </header>


      {/* =========================
          CONTENT
      ========================= */}

      <section className="apply-section">

        {/* LEFT SIDE */}

        <div className="apply-content">

          <p>
            At Veteran Valor Farm, we are excited to announce that we 
            accept applications for our housing program on our farm.
            If you are a veteran seeking a new beginning, a fresh start,
            and are not afraid of some hard work, we invite you to join 
            our close-knit community.
          </p>
        <h2>Why Choose Veteran Valor Farm?</h2>
          <p>
            A Commitment to Veterans: As an organization founded by veterans, 
            we understand the unique challenges faced by those who have served our country.
             We are dedicated to providing a supportive environment where veterans can thrive 
             and rediscover their purpose.
          </p>
          <p>
            A Serene Sanctuary: Nestled in the picturesque countryside, our farm offers an idyllic
            setting for those seeking tranquility and connection with nature.       
            With vast open spaces, lush greenery, and breathtaking views, our farm showcases 
            the beauty of the great outdoors.
          </p>
           <p>
            Holistic Approach to Healing: At Veteran Valor Farm, we believe in the power of holistic healing.
             We offer a variety of programs, including therapy, vocational training, 
            and emotional support, all aimed at empowering veterans to rebuild their lives and reach their full potential.
          </p>
           <p>How to Apply : To apply for our housing program,  follow these steps:</p>
           <p>1. Complete the Application: Please download the application form from our website. </p>
          <a
              href="/documents/VVF+App+Final.odt"
              download="VVF-App-Final.odt"
              className="apply-button"
            >
              DOWNLOAD APPLICATION
            </a>

          <p>
            Take your time to fill out each section thoroughly, 
            providing us with a comprehensive understanding of your
             background, needs, and aspirations.
          </p>
            <p>2. Gather Supporting Documents: Along with your application, 
            we request that you include any relevant supporting documents such as a copy of your
             military service record(DD214). 
            These documents will help us assess your eligibility and tailor our services
             to your individual needs.</p>
        <p>3. Submit Your Application: Once you have completed the application form and gathered all the 
            necessary supporting documents, we kindly ask that you email them
             to Jpeterson@veteranvalorfarm.org. Our dedicated team will review your application 
             promptly and confidentially.</p>
             <h3>Join Us Today</h3>
             <p>At Veteran Valor Farm, we firmly believe that every veteran deserves a chance to start anew.
                 By offering a nurturing environment, valuable resources, and a strong support network, 
                 we empower veterans to transition from military service to civilian life with 
                 confidence and purpose.
                Don't miss out on this incredible opportunity to join our flourishing community.
                Apply now and take the first step toward a brighter future. 
                We look forward to receiving your application and welcoming you to Veteran Valor Farm.
                </p>
                <h3>Contact Information</h3>
                <p>Email: Jpeterson@veteranvalorfarm.org</p>
        </div>


        {/* RIGHT SIDE */}

        <div className="apply-image">

          <img
            src={helpingVetsImage}
            alt="Veterans helping each other at Veteran Valor Farm"
          />

        </div>

      </section>

    </main>
  );
};

export default Apply;