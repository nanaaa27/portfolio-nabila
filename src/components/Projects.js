function Projects() {
  return (
    <section className="main-section" id="projects">
      <div class="section-badge">Creations</div>
      <h2 className="reveal reveal-delay-1">My Projects</h2>

      <div className="project-grid">
        <article
          className="project-card project-overlay reveal-scale reveal-delay-1"
          style={{ backgroundImage: "url('midori-preview.jpg')" }}
        >
          <div className="project-overlay-content">
            <h3>Midori Matcha Cafe</h3>
            <p>
              A Japanese-inspired cafe profile with a booking system that sends
              requests straight to email.
            </p>
            <div className="project-overlay-footer">
              <div className="card-tags">
                <span>#HTML5</span>
                <span>#CSS3</span>
                <span>#JavaScript</span>
                <span>#Web3Forms</span>
              </div>
              <a
                href="https://nanaaa27.github.io/matchaholic-cafe"
                target="_blank"
                rel="noopener noreferrer"
                className="project-demo-btn"
              >
                Live Demo ↗
              </a>
            </div>
          </div>
        </article>

        <article
          className="project-card project-overlay reveal-scale reveal-delay-2"
          style={{ backgroundImage: "url('minipet-preview.jpg')" }}
        >
          <div className="project-overlay-content">
            <h3>Virtual Pet Mini-Game</h3>
            <p>
              An interactive virtual pet web app with mini-games, coins, XP levels,
              LocalStorage saves, and dark mode.
            </p>
            <div className="project-overlay-footer">
              <div className="card-tags">
                <span>#HTML5</span>
                <span>#CSS3</span>
                <span>#JavaScript</span>
                <span>#LocalStorage</span>
                <span>#GameLoop</span>
              </div>
              <a
                href="https://nanaaa27.github.io/mikomydino-pet/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-demo-btn"
              >
                Live Demo ↗
              </a>
            </div>
          </div>
        </article>

        <article
          className="project-card project-overlay reveal-scale reveal-delay-3"
          style={{ backgroundImage: "url('nabyte-preview.jpg')" }} >
          <div className="project-overlay-content">
            <h3>Nabyte Creative Agency</h3>
            <p>
              An elegant, dark-themed user interface designed for a creative agency, featuring flexible layouts and interactive elements. (Work in Progress).
            </p>
            <div className="project-overlay-footer">
              <div className="card-tags">
                <span>#ReactJS</span>
                <span>#HTML5</span>
                <span>#CSS3</span>
                <span>#UI-Design</span>
              </div>
              <a
                href="https://nanaaa27.github.io/nabyte-creative/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-demo-btn"
              >
                Live Demo ↗
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
