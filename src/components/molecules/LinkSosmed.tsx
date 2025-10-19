import Facebook from "../atoms/Icons/Facebook";
import Github from "../atoms/Icons/Github";
import Instagram from "../atoms/Icons/Instagram";
import LinkedIn from "../atoms/Icons/Linkedin";

const Data = [
  {
    id: "github",
    link: "https://github.com/fathurds",
    label: "Github",
    component: Github,
  },
  {
    id: "linkedin",
    link: "https://www.linkedin.com/in/fathurds/",
    label: "LinkedIn",
    component: LinkedIn,
  },
  {
    id: "instagram",
    link: "https://www.instagram.com/fathurds/",
    label: "Instagram",
    component: Instagram,
  },
  {
    id: "facebook",
    link: "https://www.facebook.com/dinamozz/",
    label: "Facebook",
    component: Facebook,
  },
];

function LinkSosmed() {
  return (
    <div className="flex items-center my-5 lg:my-0">
      {Data.map((item) => {
        const Logo = item.component;

        return (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            className="w-12 h-12 mr-3 rounded-full flex justify-center align-middle border border-slate-300 text-dark hover:border-primary hover:bg-primary hover:text-white transition"
          >
            <Logo />
          </a>
        );
      })}
    </div>
  );
}

export default LinkSosmed;
