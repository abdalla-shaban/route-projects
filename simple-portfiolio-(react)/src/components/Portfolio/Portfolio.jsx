import SpecialHeading from "../SpecialHeading";
import port1 from "../../assets/port1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

const portfolioItems = [
  {
    imgSrc: port1,
    imgAlt: "port1",
  },
  {
    imgSrc: port2,
    imgAlt: "port2",
  },
  {
    imgSrc: port3,
    imgAlt: "port3",
  },
  {
    imgSrc: port1,
    imgAlt: "port1",
  },
  {
    imgSrc: port2,
    imgAlt: "port2",
  },
  {
    imgSrc: port3,
    imgAlt: "port3",
  },
];

export default function Portfolio() {
  const [currentImgObj, setCurrentImgObj] = useState({ src: "", alt: "" });
  const handleCurrentImgObj = (ele) => {
    setCurrentImgObj({
      src: ele.currentTarget.children[0].src,
      alt: ele.currentTarget.children[0].alt,
    });
  };
  const handleRemoveCurrentImgObj = () => {
    setCurrentImgObj({ src: "", alt: "" });
  };
  return (
    <section className="flex flex-col flex-1 my-5 py-5">
      <SpecialHeading title={"Portfolio Component"} isLight={true} />
      <div className="tb-container">
        <div className="row gap-y-5 px-3 sm:px-0">
          {portfolioItems.map(({ imgSrc, imgAlt }, i) => (
            <div className="md:col md:col-6 lg:col-4 cursor-pointer" key={i}>
              <div
                className="relative overflow-hidden group"
                onClick={(e) => handleCurrentImgObj(e)}
              >
                <img src={imgSrc} alt={imgAlt} className="rounded w-full" />
                <div className="invisible opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:visible flex justify-center items-center absolute w-full h-full start-0 top-0 bg-blue-500/90 text-7xl text-white z-10">
                  <FaPlus />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`${
          currentImgObj.src !== "" ? "fixed" : "hidden"
        } flex justify-center items-center start-0 top-0 w-full h-full bg-blue-950/70 z-50 px-5`}
        onClick={(e) =>
          !e.target.hasAttribute("src") ? handleRemoveCurrentImgObj() : null
        }
      >
        <div className="w-96 md:w-1/2">
          <img src={currentImgObj.src} alt={currentImgObj.alt} />
        </div>
      </div>
    </section>
  );
}
