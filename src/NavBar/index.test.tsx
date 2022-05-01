import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import NavBar from "./index";

it("renders correct navbar component", () => {
  const component = renderer.create(<BrowserRouter><NavBar /></BrowserRouter>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
