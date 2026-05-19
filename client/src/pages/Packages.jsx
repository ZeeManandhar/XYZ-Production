import PackageCard from "../components/PackageCard.jsx";
import SEO, { businessSchema } from "../components/SEO.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { packages } from "../data/siteData.js";

export default function Packages() {
  return (
    <>
      <SEO
        title="Photography Packages and Pricing"
        description="Compare Basic, Standard, and Premium photography packages from XYZ Production for portraits, events, studio shoots, and weddings."
        keywords="photography packages, photography pricing, wedding photography package, portrait photography price, studio shoot package"
        schema={{ ...businessSchema, "@type": "Product", name: "XYZ Production Photography Packages" }}
      />
      <section className="section page-section">
        <SectionHeader
          eyebrow="Simple Pricing"
          title="Photography Packages and Pricing"
          text="Choose a photography package as a starting point, then we can tailor the final plan around your shoot details."
        />
        <div className="package-grid">
          {packages.map((item) => <PackageCard item={item} key={item.name} />)}
        </div>
      </section>
    </>
  );
}
