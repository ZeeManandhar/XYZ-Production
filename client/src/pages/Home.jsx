import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import PackageCard from "../components/PackageCard.jsx";
import PortfolioGrid from "../components/PortfolioGrid.jsx";
import SEO, { businessSchema } from "../components/SEO.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { packages, services, stats, testimonials } from "../data/siteData.js";

export default function Home() {
  return (
    <>
      <SEO
        title="XYZ Production | Professional Photography Studio"
        description="Book XYZ Production for professional wedding, portrait, event, product, and studio photography with elegant editing and client-first service."
        keywords="XYZ Production, photography studio, professional photographer, wedding photography, portrait photography, event photography, product photography, studio shoot"
        schema={businessSchema}
      />
      <Hero
        title="XYZ PRODUCTION"
        text="Professional wedding, portrait, event, product, and studio photography services for every moment that matters."
        images={[
          "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=80",
          "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=80"
        ]}
        imageAlts={[
          "Professional photographer capturing landscape and travel photography for XYZ Production",
          "Elegant wedding photography portfolio by XYZ Production",
          "Studio photography camera setup for XYZ Production"
        ]}
        secondaryLabel="Explore Work"
      />

      <section className="section">
        <SectionHeader eyebrow="What We Do" title="Professional Photography Services" />
        <div className="service-grid">
          {services.map((service) => <ServiceCard key={service.title} service={service} />)}
        </div>
        <div className="center"><Link className="button ghost" to="/services">View All Services</Link></div>
      </section>

      <section className="section bordered">
        <SectionHeader eyebrow="Featured Work" title="Recent Photography Portfolio" />
        <PortfolioGrid limit={6} />
        <div className="center"><Link className="button ghost" to="/portfolio">View Full Portfolio</Link></div>
      </section>

      <section className="split-section section">
        <img className="wide-photo reveal" src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=1200&q=80" alt="Professional studio camera setup for photography sessions" />
        <div className="split-copy reveal">
          <p className="eyebrow">About Us</p>
          <h2>We Are XYZ Production</h2>
          <p>We are a team of professional photographers dedicated to wedding photography, portrait sessions, event coverage, product visuals, and studio shoots. With creativity, professionalism, and attention to detail, we turn moments into lasting memories.</p>
          <Link className="button ghost" to="/about">Learn More</Link>
        </div>
      </section>

      <section className="section accent-band">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-card reveal" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Clients Love" title="What They Say" />
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card reveal" key={item.name}>
              <span className="quote-mark">“</span>
              <p>{item.quote}</p>
              <strong>- {item.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Popular Choices" title="Photography Packages" />
        <div className="package-grid">
          {packages.map((item) => <PackageCard item={item} key={item.name} />)}
        </div>
      </section>
    </>
  );
}
