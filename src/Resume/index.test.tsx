import React from "react";
import renderer from "react-test-renderer";
import Resume from "./index";

it("renders correct resume component", () => {
  const resumeRender: renderer.ReactTestRenderer | null = renderer.create(<Resume />);
  const tree: renderer.ReactTestRendererJSON | renderer.ReactTestRendererJSON[] | null = resumeRender.toJSON();
  expect(tree).toMatchSnapshot();
});
