import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function Bio() {
  return (
    <header className="bio">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div class="d-flex align-items-center h-100">
              <div>
                <p className="tagline">Not your average developer</p>
                <p className="">
                  As a Frontend Developer with a Master's Degree in Software
                  Development from ITU and a Bachelor's Degree in Journalism
                  from DMJX, I bring a unique blend of technical and
                  communication skills to the table. My technical experience
                  revoScript, and React, alongside other frontend frameworks and
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div class="d-flex align-items-center justify-content-center h-100 p-5">
              <center>
                <div>
                  <div className="cicle" />
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </header>
    /*
    <div className="bio">
      <div className="container bio-container">
        <div className="row">
          <div className="col column-circle ">
            <div className="circle c1"></div>
            <div className="circle ci"></div>
            <div>
              <div className="circle c3"></div>
              <div className="circle c4"></div>
            </div>
            <div className="circle ci"></div>
            <div className="circle c7"></div>
            <div className="circle ci"></div>
            <div>
              <div className="circle c5"></div>
              <div className="circle c6"></div>
            </div>
            <div className="circle ci"></div>
            <div className="circle c7"></div>
          </div>
          <div className="col column">
            <p className="text-start tagline-paragraph mb-1">
              Not your average developer
            </p>
            <p className="paragraph">
              As a Frontend Developer with a Master's Degree in Software
              Development from ITU and a Bachelor's Degree in Journalism from
              DMJX, I bring a unique blend of technical and communication skills
              to the table. My technical experience revolves around developing
              web applications using HTML, CSS, JavaScript, and React, alongside
              other frontend frameworks and technologies. In a professional
              capacity, I have created web applications for enterprises,
              focusing on data management and visualisation. Additionally, I
              have successfully developed customizable and responsive websites
              for multiple companies.
            </p>
          </div>
        </div>
      </div>
    </div>
    */
  );
}
