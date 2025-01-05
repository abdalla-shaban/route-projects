import SpecialHeading from "../SpecialHeading";

export default function About() {
  return (
    <section className="flex flex-col justify-center items-center text-white bg-blue-500 flex-1 min-h-screen">
      <SpecialHeading title={"About Component"} />
      <div className="tb-container">
        <div className="flex items-center justify-center gap-10 md:gap-2">
          <p className="md:col-6">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="md:col-6">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </section>
  );
}
