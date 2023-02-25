import React from "react";

import { AiOutlineGithub } from "react-icons/ai";

function Footer() {
  return (
    <footer className="footer border-t items-center p-4  text-base-content">
      <div className="items-center grid-flow-col">
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a
          href="https://github.com/bt521/mobileDev-pwa-demo"
          className="text-3xl"
        >
          <AiOutlineGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
