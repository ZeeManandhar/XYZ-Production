import BookingForm from "../components/BookingForm.jsx";
import SEO, { businessSchema } from "../components/SEO.jsx";
import SectionHeader from "../components/SectionHeader.jsx";

export default function BookShoot() {
  return (
    <>
      <SEO
        title="Book a Photography Shoot"
        description="Book a photography shoot with XYZ Production for weddings, portraits, events, products, and studio sessions."
        keywords="book photography shoot, book photographer, wedding photography booking, portrait session booking, studio shoot booking"
        schema={{ ...businessSchema, "@type": "ReservationService", name: "Book a Photography Shoot" }}
      />
      <section className="section page-section">
        <SectionHeader
          eyebrow="Start Your Session"
          title="Book a Photography Shoot"
          text="Share a few details and the studio team will follow up to confirm timing, package, and creative direction for your shoot."
        />
        <div className="booking-layout">
          <img className="reveal" src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1000&q=80" alt="Professional camera ready for a studio photography booking" />
          <BookingForm />
        </div>
      </section>
    </>
  );
}
