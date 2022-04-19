import React from "react";
import renderer from "react-test-renderer";
import SkillCategory from "./index";
import resumeData from "../../../resumeData";

it("renders correct skill category component", () => {
  const aCategory = resumeData.skills.Languages;
  const component = renderer.create(
    <SkillCategory name="Languages" children={aCategory} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
