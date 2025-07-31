import React from "react";
import { createRoot } from "react-dom/client";
import RemoteCounter from "./src/pages/index.jsx";

function waitAndRender() {
  const el = document.getElementById("remote-root");
  if (el) {
    const root = createRoot(el);
    root.render(<RemoteCounter />);
  } else {
    const observer = new MutationObserver(() => {
      const el2 = document.getElementById("remote-root");
      if (el2) {
        const root = createRoot(el2);
        root.render(<RemoteCounter />);
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
}

waitAndRender();
