function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Nabila</span></h1>
        <p className="role">Frontend Developer</p>

        <div className="avatar-wrap">
          <div className="avatar-img">
            <img src="selfphoto.jpeg" alt="Nabila" />
          </div>
          <div className="float-badge float-location">📍 Indonesia</div>
          <div className="float-badge float-available">
            <span className="dot-green"></span> Available for work
          </div>
        </div>

        <p className="bio">
          An entry-level web developer who loves crafting
          clean, beautiful, and mobile-friendly layouts.
          Always excited to learn new web technologies and
          improve my coding skills.
        </p>

        <div className="hero-btns">
          <a href="https://wa.me/6288971937010" className="btn-primary">→ Hire Me</a>
          <a href="./CV_NABILA(2026).pdf" download="CV_NABILA(2026)" target="_blank" 
  rel="noopener noreferrer" className="btn-outline" id="downloadCvBtn">↓ Download CV</a>
        </div>
      </div>
    </section>
  );
}
