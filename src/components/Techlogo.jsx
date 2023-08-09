export default function TechLogo({ logo, handleImageClick }) {
  return (
    <div
      className="flip-container"
      onClick={() => handleImageClick(logo.name, logo.parent)}
    >
      <div className={`flipper flipper-${logo.name}-${logo.parent}`}>
        <div className={`front front-${logo.name}-${logo.parent}`}>
          <img
            src={logo.path}
            alt="logo"
            key={logo.key}
            className="techlogo"
            title={logo.name}
          />
        </div>
        <div className={`back back-${logo.name}-${logo.parent}`}>
          <p className="flipped-text">{logo.displayname}</p>
        </div>
      </div>
    </div>
  );
}
