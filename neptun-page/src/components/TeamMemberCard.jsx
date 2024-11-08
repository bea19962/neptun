import "../styles/_teammembercard.scss";

const TeamMemberCard = ({ name, role, image, socials }) => {
  return (
    <div className="team-member-card">
      <img src={image} alt={name} className="team-member-card__image" />
      <div className="team-member-card__info">
        <h3 className="team-member-card__name">{name}</h3>
        <p className="team-member-card__role">{role}</p>
        <div className="team-member-card__socials">
          {socials.artstation && (
            <a href={socials.artstation} target="_blank" rel="noopener noreferrer">ArtStation</a>
          )}
          {socials.website && (
            <a href={socials.website} target="_blank" rel="noopener noreferrer">Website</a>
          )}
          {socials.instagram && (
            <a href={socials.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
