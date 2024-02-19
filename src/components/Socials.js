import React, { useContext } from "react";
import { ImGithub, ImLinkedin } from "react-icons/im";
import { CursorContext } from "../context/CursorContext";

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="hidden xl:flex ml-24"
    >
      <ul className="flex gap-x-4">
        <li>
          <a href="https://github.com/ThomasFzr" target="_blank">
            <ImGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/thomas-foltzer-9b50002ab/"
            target="_blank"
          >
            <ImLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
