import StarTitle from "../components/StarTitle";

export default function About() {
  return (
    <>
      <StarTitle>About Component</StarTitle>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            <p className="content">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>

          <div className="col">
            <p className="content">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
