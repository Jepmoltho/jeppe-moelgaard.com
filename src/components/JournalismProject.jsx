export default function JournalismProject({ headline, image }) {
  return (
    <div className="journalism-project">
      <div className="container">
        <div className="row">
          <center>
            <h2>{headline}</h2>
          </center>
          <img src={image} alt="" className="journalism-image"></img>
        </div>
      </div>
    </div>
  );
}
