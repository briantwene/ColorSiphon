import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

function root() {
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
    <div className="mx-auto flex flex-col h-full">
      <Nav download={onClickDownload} />
      <Outlet context={{ download: onClickDownload }} />
      <Footer />
    </div>
  );
}

export default root;
