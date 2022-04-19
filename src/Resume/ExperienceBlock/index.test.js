import React from "react";
import renderer from "react-test-renderer";
import ExperienceBlock from './index';
import resumeData from '../../resumeData';

it('renders correct experience component', () => {
    const component = renderer.create(<ExperienceBlock jobs={resumeData.experience} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
