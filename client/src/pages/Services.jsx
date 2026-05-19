import SEO, { businessSchema } from "../components/SEO.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { services } from "../data/siteData.js";

export default function Services() {
  return (
    <>
      <SEO
        title="Photography Services"
        description="Explore XYZ Production services including wedding photography, portrait photography, event photography, product photography, and studio shoots."
        keywords="photography services, wedding photography service, portrait photography, event photographer, product photography, studio photography"
        schema={{ ...businessSchema, "@type": "Service", name: "Professional Photography Services" }}
      />
      <section className="section page-section">
        <SectionHeader
          eyebrow="What We Do"
          title="Professional Photography Services"
          text="From intimate portraits and wedding photography to polished product campaigns and event coverage, every service is shaped around your goals."
        />
        <div className="service-grid">
          {services.map((service) => <ServiceCard service={service} key={service.title} />)}
        </div>
      </section>
    </>
  );
}
