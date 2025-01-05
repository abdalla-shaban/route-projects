import SpecialHeading from "../SpecialHeading";
import ContactFormInput from "./ContactFormInput";
export default function Contact() {
  return (
    <section className="flex flex-col flex-1 my-5 py-5 ">
      <SpecialHeading title={"Contact Section"} isLight={true} />
      <div className="tb-container mb-5">
        <form
          className="flex flex-col justify-center gap-11 md:w-3/4 mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <ContactFormInput
            id={"usernameInput"}
            name={"username"}
            type={"text"}
            placeholder={"Enter your name"}
            label={"Username:"}
          />
          <ContactFormInput
            id={"userAgeInput"}
            name={"userAge"}
            type={"text"}
            placeholder={"Enter your age"}
            label={"Age:"}
          />
          <ContactFormInput
            id={"userEmailInput"}
            name={"userEmail"}
            type={"email"}
            placeholder={"Enter your email"}
            label={"Email:"}
          />
          <ContactFormInput
            id={"userPasswordInput"}
            name={"userPassword"}
            type={"password"}
            placeholder={"Enter your Password"}
            label={"Password:"}
          />

          <button className="w-fit border-0 p-3 rounded-lg transition-all duration-300 bg-blue-950 text-white hover:bg-blue-500">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
