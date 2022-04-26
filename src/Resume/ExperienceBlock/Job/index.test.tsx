import React from "react";
import renderer from "react-test-renderer";
import Job from "./index";
import { resumeData } from "../../../resumeData";

it("renders correct job component", () => {
  const aJob = resumeData.experience.upaAR;
  const component = renderer.create(<Job {...aJob} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
