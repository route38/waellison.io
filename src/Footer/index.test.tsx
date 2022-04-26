import React from "react";
import renderer from "react-test-renderer";
import Footer from "./index";

it("renders correct footer component", () => {
  const component: renderer.ReactTestRenderer | null = renderer.create(<Footer />);
  const tree: renderer.ReactTestRendererJSON | renderer.ReactTestRendererJSON[] | null = component.toJSON();
  expect(tree).toMatchSnapshot();
});
