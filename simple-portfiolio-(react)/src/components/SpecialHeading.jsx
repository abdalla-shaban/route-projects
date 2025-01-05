import { FaStar } from "react-icons/fa";

export default function SpecialHeading({ title, isLight }) {
  return (
    <div className="mb-5 pb-5">
      <h1
        className={`relative text-center text-4xl uppercase font-bold my-5 before:content-[''] before:absolute before:w-52 before:h-1 before:start-1/2 before:-translate-x-1/2 before:-bottom-6 ${
          isLight ? "before:bg-blue-950 text-blue-950" : "before:bg-white"
        }`}
      >
        {title}
        <span
          className={`absolute text-2xl start-1/2 -translate-x-1/2 -bottom-8 px-2 ${
            isLight ? "bg-white text-blue-950" : "bg-blue-500 text-white"
          }`}
        >
          <FaStar />
        </span>
      </h1>
    </div>
  );
}
