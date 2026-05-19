import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteUrl = "https://www.xyzproduction.com";
const defaultImage = `${siteUrl}/og-xyz-production.jpg`;

const setMeta = (name, content, attribute = "name") => {
  let tag = document.head.querySelector(`meta[${attribute}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const setCanonical = (href) => {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

const setJsonLd = (schema) => {
  let script = document.head.querySelector('script[data-schema="xyz-production"]');
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.schema = "xyz-production";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schema);
};

export default function SEO({ title, description, keywords, schema, image = defaultImage }) {
  const { pathname } = useLocation();
  const canonical = `${siteUrl}${pathname}`;
  const fullTitle = title.includes("XYZ Production") ? title : `${title} | XYZ Production`;

  useEffect(() => {
    document.title = fullTitle;
    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("robots", "index, follow");
    setMeta("author", "XYZ Production");
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", canonical, "property");
    setMeta("og:image", image, "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);
    setCanonical(canonical);
    setJsonLd(schema);
  }, [canonical, description, fullTitle, image, keywords, schema]);

  return null;
}

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "XYZ Production",
  url: siteUrl,
  image: defaultImage,
  description: "XYZ Production is a professional photography studio offering wedding, portrait, event, product, and studio photography services.",
  telephone: "+91-98765-43210",
  email: "hello@xyzproduction.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Studio Street",
    addressLocality: "Creative City",
    postalCode: "110001",
    addressCountry: "IN"
  },
  areaServed: ["Creative City", "India"],
  sameAs: [
    "https://www.instagram.com/xyzproduction",
    "https://www.facebook.com/xyzproduction"
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Photography" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Portrait Photography" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Event Photography" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product Photography" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Studio Shoot" } }
  ]
};
