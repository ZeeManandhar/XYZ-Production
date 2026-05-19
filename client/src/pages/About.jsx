import { Link } from "react-router-dom";
import SEO, { businessSchema } from "../components/SEO.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import TeamCard from "../components/TeamCard.jsx";
import { team, values } from "../data/siteData.js";

export default function About() {
  return (
    <>
      <SEO
        title="About XYZ Production"
        description="Learn about XYZ Production, a professional photography studio creating timeless wedding, portrait, event, product, and studio photography."
        keywords="about XYZ Production, professional photography studio, photography team, wedding photographers, portrait studio"
        schema={{ ...businessSchema, "@type": ["ProfessionalService", "LocalBusiness"] }}
      />
      <section className="page-hero section">
        <div className="reveal">
          <p className="eyebrow">Our Studio</p>
          <h1>About XYZ Production</h1>
          <p>Clean direction, beautiful light, and thoughtful photography storytelling for people, brands, weddings, events, and celebrations.</p>
        </div>
        <img className="reveal" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80" alt="Professional photography studio camera equipment" />
      </section>

      <section className="story-section section">
        <div className="collage reveal">
          <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80" alt="Wedding couple photography session" />
          <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80" alt="Creative portrait photography session" />
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80" alt="Elegant bridal wedding photography details" />
        </div>
        <div className="split-copy reveal">
          <p className="eyebrow">Our Story</p>
          <h2>Turning Moments Into Timeless Memories</h2>
          <p>XYZ Production began with a simple belief: meaningful images are built from trust, preparation, and a patient eye. Our studio combines editorial polish with emotional honesty, helping each client feel confident in front of the camera.</p>
          <p>From wedding days and family portraits to product campaigns and events, we plan each shoot carefully so the final gallery feels intentional, warm, and unmistakably yours.</p>
        </div>
      </section>

      <section className="section bordered">
        <SectionHeader eyebrow="What Guides Us" title="Our Values" />
        <div className="value-grid">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article className="value-card reveal" key={value.title}>
                <Icon size={30} />
                <h3>{value.title}</h3>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Studio Team" title="The People Behind The Lens" />
        <div className="team-grid">
          {team.map((member) => <TeamCard key={member.name} member={member} />)}
        </div>
      </section>

      <section className="cta-section reveal">
        <p className="eyebrow">Ready When You Are</p>
        <h2>Let’s Create Something Beautiful Together</h2>
        <Link className="button primary" to="/book">Book a Shoot</Link>
      </section>
    </>
  );
}

