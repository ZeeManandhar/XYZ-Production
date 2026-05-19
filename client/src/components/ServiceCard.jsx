export default function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <article className="service-card reveal">
      <img src={service.image} alt={service.title} />
      <div className="card-body">
        <Icon size={28} />
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </article>
  );
}
