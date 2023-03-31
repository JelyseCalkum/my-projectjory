import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Jelyse Calkum</h2>
          <ul>
            <li>
            Core competencies in full-stack web
              development with interest in UI design.
              Also profiicient in construction/project management, including take-offs, bids, and product ordering. 
              I will edit this portion to make it better!!
            </li>
          </ul>

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/jelysecalkum/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
              />
            </a>
          </p>

          <a
            href="https://github.com/jelysecalkum/react-portfolio/raw/main/docs/JelyseCalkumResume.pdf"
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
            HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js, IndexedDB,<br />
            Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
    