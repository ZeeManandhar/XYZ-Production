import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function PackageCard({ item }) {
  return (
    <article className={item.featured ? "package-card featured reveal" : "package-card reveal"}>
      {item.featured && <span className="badge">Most Popular</span>}
      <h3>{item.name}</h3>
      <p className="price">{item.price}</p>
      <ul>
        {item.features.map((feature) => (
          <li key={feature}><Check size={18} /> {feature}</li>
        ))}
      </ul>
      <Link className="button primary" to="/book">Book Now</Link>
    </article>
  );
}
