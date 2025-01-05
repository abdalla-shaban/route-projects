import avatar from "../../assets/avatar.svg";
import SpecialHeading from "../SpecialHeading";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center text-white bg-blue-500 flex-1 min-h-screen text-center">
      <div className="w-64 mx-auto">
        <img src={avatar} alt="avatar" className="w-100" />
      </div>
      <SpecialHeading title={"Start Framework"} />
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </section>
  );
}
