import { useState, useEffect } from "react";

export default function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => {
      let activeSlide = currentSlide + 1;
      if (activeSlide >= 3) {
        activeSlide = 0;
      }
      setCurrentSlide(activeSlide);
    }, 8000);
    return () => clearInterval(iv);
  }, []);
  return (
    <div id="slider-container">
      <section id="slider">
        <ul className="row multi-slides">
          <li className={currentSlide === 0 ? "active" : ""}>
            <section className="slide-img" />
            <blockquote>
              <p>
                <strong>Vas-y à vélo!</strong>
                <br />
                {"C'est tellement"}
                <br />
                {"plus simple."}
              </p>
              <a
                href="/apropos"
                title="À propos"
                className="simple-button gradient"
              >
                Découvres Elocyclo
              </a>
            </blockquote>
          </li>
          <li className={currentSlide === 1 ? "active" : ""}>
            <section className="slide-img" />
            <blockquote>
              <p>
                <strong>Quand tu veux,</strong>
                <br />
                Dans déjà dix stations!
              </p>
              <a
                href="/stations"
                title="Voir la carte"
                className="simple-button gradient"
              >
                Parcourir les stations
              </a>
            </blockquote>
          </li>
          <li className={currentSlide === 2 ? "active" : ""}>
            <section className="slide-img" />
            <blockquote>
              <p>
                <strong>Mieux que ton vélo:</strong>
                <br />
                Du matériel de qualité
              </p>
              <a href="#" title="Matériel" className="simple-button gradient">
                Voir les spécificités techniques
              </a>
            </blockquote>
          </li>
        </ul>
        <nav id="slider-nav" />
      </section>
    </div>
  );
}
