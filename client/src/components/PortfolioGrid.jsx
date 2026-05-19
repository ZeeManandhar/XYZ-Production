import { useMemo, useState } from "react";
import { portfolioItems } from "../data/siteData.js";

const categories = ["All", "Wedding", "Portrait", "Event", "Product", "Studio"];

export default function PortfolioGrid({ limit }) {
  const [active, setActive] = useState("All");
  const filteredItems = useMemo(() => {
    const items = active === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === active);
    return limit ? items.slice(0, limit) : items;
  }, [active, limit]);

  return (
    <div className="portfolio-block">
      <div className="filter-row">
        {categories.map((category) => (
          <button
            className={active === category ? "active" : ""}
            key={category}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="portfolio-grid">
        {filteredItems.map((item) => (
          <article className="portfolio-item reveal" key={item.title}>
            <img src={item.image} alt={item.title} />
            <div>
              <strong>{item.title}</strong>
              <span>{item.category}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
