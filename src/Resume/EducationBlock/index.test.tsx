import React from "react";
import renderer from "react-test-renderer";
import EducationBlock from "./index";
import { resumeData, EducationSection } from "../../resumeData";

it("renders correct education component", () => {
  const schools: EducationSection = resumeData.education;
  const component = renderer.create(
    <EducationBlock schools={schools} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
