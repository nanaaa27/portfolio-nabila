function About() {
  const aboutRef = React.useRef(null);
  const aboutWords = [
    "I'm",
    "Nabila,",
    "an",
    "entry-level",
    "developer",
    "who",
    "began",
    "coding",
    "in",
    "vocational",
    "high",
    "school.",
    "I",
    "enjoy",
    "crafting",
    "clean",
    "layouts",
    "and",
    "interactive",
    "elements,",
    "and",
    "often",
    "use",
    "AI",
    "tools",
    "as",
    "coding",
    "assistants",
    "to",
    "work",
    "more",
    "efficiently",
    "and",
    "keep",
    "my",
    "projects",
    "neat.",
    "Outside",
    "of",
    "code,",
    "I'm",
    "usually",
    "exploring",
    "design",
    "trends",
    "or",
    "enjoying",
    "a",
    "cup",
    "of",
    "matcha.",
  ];

  React.useEffect(() => {
    const section = aboutRef.current;

    if (!section) {
      return undefined;
    }

    let animationFrame;

    const clamp = (value, min = 0, max = 1) => {
      return Math.min(Math.max(value, min), max);
    };

    const fadeIn = (progress, start, end) => {
      return clamp((progress - start) / (end - start));
    };

    const fadeOut = (progress, start, end) => {
      return 1 - fadeIn(progress, start, end);
    };

    const updateScrollProgress = () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }

      animationFrame = window.requestAnimationFrame(() => {
        const sectionRect = section.getBoundingClientRect();
        const scrollDistance = Math.max(
          section.offsetHeight - window.innerHeight,
          1
        );

        const progress = clamp(-sectionRect.top / scrollDistance);

        const firstLineOpacity =
          fadeIn(progress, 0.03, 0.16) *
          fadeOut(progress, 0.36, 0.48);
        const secondLineOpacity =
          fadeIn(progress, 0.17, 0.32) *
          fadeOut(progress, 0.4, 0.52);
        const paragraphOpacity = fadeIn(progress, 0.48, 0.68);
        const factsOpacity = fadeIn(progress, 0.77, 0.94);

        section.style.setProperty(
          '--about-line-one-opacity',
          firstLineOpacity
        );
        section.style.setProperty(
          '--about-line-one-y',
          `${(1 - firstLineOpacity) * 28}px`
        );

        section.style.setProperty(
          '--about-line-two-opacity',
          secondLineOpacity
        );
        section.style.setProperty(
          '--about-line-two-y',
          `${(1 - secondLineOpacity) * 28}px`
        );

        section.style.setProperty(
          '--about-paragraph-opacity',
          paragraphOpacity
        );
        section.style.setProperty(
          '--about-paragraph-y',
          `${(1 - paragraphOpacity) * 36}px`
        );

        const wordCount = aboutWords.length;

        aboutWords.forEach((_, index) => {
          const wordStart = (index / wordCount) * 0.78;
          const wordOpacity = clamp(
            (paragraphOpacity - wordStart) / 0.22
          );
          const word = section.querySelector(
            `[data-about-word="${index}"]`
          );

          if (word) {
            word.style.opacity = wordOpacity;
            word.style.transform =
              `translateY(${(1 - wordOpacity) * 10}px)`;
          }
        });

        section.style.setProperty(
          '--about-badges-opacity',
          paragraphOpacity
        );
        section.style.setProperty(
          '--about-badges-y',
          `${(1 - paragraphOpacity) * 24}px`
        );

        section.style.setProperty(
          '--about-facts-opacity',
          factsOpacity
        );
        section.style.setProperty(
          '--about-facts-y',
          `${(1 - factsOpacity) * 28}px`
        );
      });
    };

    updateScrollProgress();

    window.addEventListener('scroll', updateScrollProgress, {
      passive: true,
    });
    window.addEventListener('resize', updateScrollProgress);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <section
      className="about-scroll-section"
      id="about"
      ref={aboutRef}
    >
      <div className="about-scroll-sticky">
        <div className="about-scroll-copy">
          <p className="about-scroll-line about-scroll-line-one">
            Learning out loud,
          </p>

          <p className="about-scroll-line about-scroll-line-two">
            building with care.
          </p>

          <p className="about-scroll-paragraph">
            {aboutWords.map((word, index) => (
              <React.Fragment key={`${word}-${index}`}>
                <span
                  className="about-scroll-word"
                  data-about-word={index}
                >
                  {word}
                </span>
                {index < aboutWords.length - 1 ? ' ' : ''}
              </React.Fragment>
            ))}
          </p>
        </div>

        <div className="about-scroll-tech-badge about-scroll-tech-html">
          HTML5
        </div>

        <div className="about-scroll-tech-badge about-scroll-tech-css">
          CSS3
        </div>

        <div className="about-scroll-tech-badge about-scroll-tech-react">
          React JS
        </div>

        <div className="about-scroll-facts">
          <div className="about-scroll-fact">
            UI/UX Minded
          </div>

          <div className="about-scroll-fact">
            Code Enthusiast
          </div>

          <div className="about-scroll-fact">
            Matcha Lover
          </div>
        </div>
      </div>
    </section>
  );
}