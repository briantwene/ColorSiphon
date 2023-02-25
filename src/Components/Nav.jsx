import React, { useEffect } from "react";
import { ReactComponent as Logo } from "../assets/logo-black.svg";

function Nav() {
  let deferredPrompt;
  const catchPrompt = (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI notify the user they can install the PWA

    // Optionally, send analytics event that PWA install promo was shown.
    console.log(`'beforeinstallprompt' event was fired.`);
  };

  const onClickDownload = async () => {
    // Hide the app provided install promotion

    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    // Optionally, send analytics event with outcome of user choice
    console.log(`User response to the install prompt: ${outcome}`);
    // We've used the prompt, and can't use it again, throw it away
    deferredPrompt = null;
  };

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", catchPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", catchPrompt);
    };
  }, []);

  return (
    <div className="navbar  bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/extract">Extract</a>
            </li>
            <li>
              <a href="/history">History</a>
            </li>
          </ul>
        </div>
        <div className="btn btn-ghost normal-case text-xl font-semibold font-poppins">
          ColorSiphon
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/extract">Extract</a>
          </li>
          <li>
            <a href="/history">History</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-info" onClick={onClickDownload}>
          Download PWA
        </button>
      </div>
    </div>
  );
}

export default Nav;
