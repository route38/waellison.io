import React from "react";
import renderer from "react-test-renderer";
import Resume from "./index";

it("renders correct resume component", () => {
  const resumeRender = renderer.create(<Resume />);
  const tree = resumeRender.toJSON();
  expect(tree).toMatchSnapshot();
});
