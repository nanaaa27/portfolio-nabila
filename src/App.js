function App() {
  React.useEffect(() => {
    const elements = document.querySelectorAll(
      '.reveal, .reveal-scale'
    );
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-frame">
      <main className="main-content-layer">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
      </main>

      <div className="footer-curtain">
        <Footer />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);