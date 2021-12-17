import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="h-20 bg-blue-400 mt-10 flex items-center justify-center">
      <a
        className="hover:cursor-pointer hover:text-blue-700 text-xl text-gray-100 underline mx-4"
        href="https://www.cgibson.us"
      >
        Corey Gibson
      </a>
      <a
        href="https://www.linkedin.com/in/corey-gibson"
        className="hover:cursor-pointer hover:text-blue-700 text-xl text-gray-100 underline mx-4"
      >
        <FontAwesomeIcon icon={["fab", "linkedin"]} />
      </a>
    </div>
  );
}
