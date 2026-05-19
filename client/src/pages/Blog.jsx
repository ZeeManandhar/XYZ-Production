import SEO, { businessSchema } from "../components/SEO.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { blogPosts } from "../data/siteData.js";

export default function Blog() {
  return (
    <>
      <SEO
        title="Photography Blog"
        description="Read photography tips from XYZ Production, including portrait preparation, wedding coverage planning, and product photography guidance."
        keywords="photography blog, portrait session tips, wedding photography tips, product photography tips, photography guides"
        schema={{ ...businessSchema, "@type": "Blog", name: "XYZ Production Photography Blog" }}
      />
      <section className="section page-section">
        <SectionHeader
          eyebrow="Studio Notes"
          title="Photography Blog"
          text="Short photography guides, session tips, and behind-the-scenes notes from the XYZ team."
        />
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article className="blog-card reveal" key={post.title}>
              <img src={post.image} alt={`${post.title} - XYZ Production photography blog`} />
              <div className="card-body">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <button className="button ghost">Read More</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
