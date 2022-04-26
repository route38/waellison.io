import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const docRoot: HTMLElement | null = document.getElementById("root");
const root = createRoot(docRoot!);
root.render(<App />);
