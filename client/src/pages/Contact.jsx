import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../components/ContactForm.jsx";
import SEO, { businessSchema } from "../components/SEO.jsx";
import SectionHeader from "../components/SectionHeader.jsx";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact XYZ Production"
        description="Contact XYZ Production to discuss wedding photography, portrait sessions, event coverage, product photography, and studio shoot availability."
        keywords="contact photography studio, book photographer, photography studio contact, wedding photographer contact, studio shoot inquiry"
        schema={{ ...businessSchema, "@type": "ContactPage", name: "Contact XYZ Production" }}
      />
      <section className="section page-section">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Contact XYZ Production"
          text="Tell us what photography session you are planning. We will reply with availability, package options, and next steps."
        />
        <div className="contact-layout">
          <div className="contact-panel reveal">
            <h2>Photography Studio Details</h2>
            <p><MapPin size={18} /> 123 Studio Street, Creative City, 110001</p>
            <p><Phone size={18} /> +91 98765 43210</p>
            <p><Mail size={18} /> hello@xyzproduction.com</p>
            <img src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=900&q=80" alt="Professional photography studio desk and camera workspace" />
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
