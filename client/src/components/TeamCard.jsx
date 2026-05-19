export default function TeamCard({ member }) {
  return (
    <article className="team-card reveal">
      <img src={member.image} alt={member.name} />
      <div>
        <h3>{member.name}</h3>
        <p>{member.role}</p>
        <div className="social-row">
          {member.socials.map((Icon, index) => (
            <span key={index}><Icon size={15} /></span>
          ))}
        </div>
      </div>
    </article>
  );
}
