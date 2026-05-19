import PortfolioGrid from "../components/PortfolioGrid.jsx";
import SEO, { businessSchema } from "../components/SEO.jsx";
import SectionHeader from "../components/SectionHeader.jsx";

export default function Portfolio() {
  return (
    <>
      <SEO
        title="Photography Portfolio"
        description="View the XYZ Production photography portfolio featuring wedding, portrait, event, product, and studio photography projects."
        keywords="photography portfolio, wedding photography portfolio, portrait portfolio, event photography gallery, product photography gallery"
        schema={{ ...businessSchema, "@type": "ImageGallery", name: "XYZ Production Photography Portfolio" }}
      />
      <section className="section page-section">
        <SectionHeader
          eyebrow="Featured Work"
          title="Photography Portfolio"
          text="Browse selected professional photography work across weddings, portraits, events, products, and studio sessions."
        />
        <PortfolioGrid />
      </section>
    </>
  );
}
