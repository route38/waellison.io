import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import App from "./App";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./index.css";

const docRoot: HTMLElement | null = document.getElementById("root");
const root = createRoot(docRoot!);
root.render(
    <React.StrictMode>
        <NavBar/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/resume" element={<Resume/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
            </Routes>
        </BrowserRouter>
        <Footer/>
    </React.StrictMode>
);
