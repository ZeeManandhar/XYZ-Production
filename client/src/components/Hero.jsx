import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroBackground3D from "./HeroBackground3D.jsx";

export default function Hero({
  eyebrow = "Capturing Moments, Creating Memories",
  title,
  text,
  image,
  images,
  imageAlts = [],
  primaryLabel = "Book a Shoot",
  primaryTo = "/book",
  secondaryLabel,
  secondaryTo = "/portfolio"
}) {
  const slides = images?.length ? images : [image];
  const titleLines = title.split(" ");
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero reveal">
      <HeroBackground3D />
      <div className="hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="animated-hero-title" aria-label={title}>
          {titleLines.map((line, lineIndex) => (
            <span className="hero-title-line" aria-hidden="true" key={line}>
              {[...line].map((letter, letterIndex) => (
                <span
                  className="hero-title-letter"
                  key={`${line}-${letterIndex}`}
                  style={{ animationDelay: `${lineIndex * 0.38 + letterIndex * 0.055}s` }}
                >
                  {letter}
                </span>
              ))}
            </span>
          ))}
        </h1>
        <p>{text}</p>
        <div className="button-row">
          <Link className="button primary" to={primaryTo}>{primaryLabel}</Link>
          {secondaryLabel && <Link className="button ghost" to={secondaryTo}>{secondaryLabel}</Link>}
        </div>
      </div>
      <div className="hero-media">
        <div className="hero-slider" aria-label="Featured photography slideshow">
          {slides.map((slide, index) => (
            <img
              className={activeSlide === index ? "active" : ""}
              key={slide}
              src={slide}
              alt={imageAlts[index] || `${title} photography showcase ${index + 1}`}
            />
          ))}
        </div>
        <div className="slider-dots">
          {slides.map((slide, index) => (
            <button
              aria-label={`Show slide ${index + 1}`}
              className={activeSlide === index ? "active" : ""}
              key={slide}
              onClick={() => setActiveSlide(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
