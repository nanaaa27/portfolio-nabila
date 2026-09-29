function Services() {
  const servicesStackRef = React.useRef(null);

  React.useEffect(() => {
    const stack = servicesStackRef.current;

    if (!stack) {
      return undefined;
    }

    const cards = Array.from(
      stack.querySelectorAll('.service-card')
    );

    let animationFrame;

    const clamp = (value, min = 0, max = 1) => {
      return Math.min(Math.max(value, min), max);
    };

    const updateCardScale = () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }

      animationFrame = window.requestAnimationFrame(() => {
        const stackStyles = window.getComputedStyle(stack);
        const stickyTop =
          parseFloat(
            stackStyles.getPropertyValue('--services-stack-top')
          ) || 96;
        const stickyOffset =
          parseFloat(
            stackStyles.getPropertyValue('--services-stack-offset')
          ) || 22;
        const scaleDistance =
          parseFloat(
            stackStyles.getPropertyValue('--services-scale-distance')
          ) || 240;

        cards.forEach((card, cardIndex) => {
          let scale = 1;

          for (
            let followingIndex = cardIndex + 1;
            followingIndex < cards.length;
            followingIndex += 1
          ) {
            const followingCard = cards[followingIndex];
            const followingRect = followingCard.getBoundingClientRect();
            const followingStickyTop =
              stickyTop + followingIndex * stickyOffset;
            const startPosition = followingStickyTop + scaleDistance;

            const stackingProgress = clamp(
              (startPosition - followingRect.top) / scaleDistance
            );

            scale -= 0.045 * stackingProgress;
          }

          card.style.setProperty(
            '--service-card-scale',
            scale.toFixed(3)
          );
        });
      });
    };

    updateCardScale();

    window.addEventListener('scroll', updateCardScale, {
      passive: true,
    });
    window.addEventListener('resize', updateCardScale);

    return () => {
      window.removeEventListener('scroll', updateCardScale);
      window.removeEventListener('resize', updateCardScale);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <section className="main-section" id="services">
      <div className="section-badge">Services</div>
      <h2 className="reveal reveal-delay-1">What I Do</h2>
      <p className="services-intro reveal reveal-delay-1">
        I help turn ideas into clean, usable websites — with thoughtful design
        and code that’s easy to maintain.
      </p>
      <div
        className="services-grid services-stack"
        ref={servicesStackRef}
      >
        
        <div className="service-card reveal reveal-delay-1">
          <div className="service-icon-wrap">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
              <path d="M2 2l7.586 7.586"></path>
              <circle cx="11" cy="11" r="2"></circle>
            </svg>
          </div>
          <h3>Web Design</h3>
          <p>
            Creating clean, aesthetic interfaces with a clear focus on layout,
            color, and readability — so every page feels intentional and easy to use.
          </p>
        </div>

        <div className="service-card reveal reveal-delay-2">
          <div className="service-icon-wrap">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
              <polyline points="16 10 20 10 20 14"></polyline>
            </svg>
          </div>
          <h3>Frontend Development</h3>
          <p>
            Building interactive, responsive websites with HTML, CSS, and React.
            I keep the code clean and maintainable, and I often use AI tools as
            coding assistants to work more efficiently.
          </p>
        </div>

        <div className="service-card reveal reveal-delay-3">
          <div className="service-icon-wrap">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
              <line x1="12" y1="18" x2="12.01" y2="18"></line>
            </svg>
          </div>
          <h3>Mobile Responsive Design</h3>
          <p>
            Ensuring every project looks and works well across screen sizes —
            from desktop to mobile — with consistent spacing and reliable layout.
          </p>
        </div>

      </div>
    </section>
  );
}
