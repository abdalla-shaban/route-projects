import { FaFacebook, FaGlobe, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import FooterItemHeading from "./FooterItemHeading";
const footerIcons = [FaFacebook, FaGlobe, FaTwitter, FaLinkedinIn];
export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white  pt-5">
      <div className="max-w-screen-sm md:max-w-screen-xl mx-auto py-5 px-4 lg:px-0">
        <div className="flex flex-wrap justify-center md:justify-between items-center text-center gap-10 md:gap-0">
          <div className="md:w-1/3">
            <FooterItemHeading title={"Location"} />
            <p className="mb-3">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="md:w-1/3">
            <FooterItemHeading title={"About the web"} />
            <div className="flex justify-center gap-4">
              {footerIcons.map((Icon, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center rounded-full size-10 text-xl border-2 border-white"
                >
                  <Icon />
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/3">
            <FooterItemHeading title={"About freelancer"} />
            <p className="px-2">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <div className="py-5 mt-5 text-center bg-slate-950">
        <p>Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
}
