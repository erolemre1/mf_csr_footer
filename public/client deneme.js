import React from "react";
import { hydrateRoot } from "react-dom/client";
import RemoteCounter from "../src/pages/index.jsx";

hydrateRoot(document.getElementById("remote-root"), React.createElement(RemoteCounter));
