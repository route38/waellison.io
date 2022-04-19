import React from "react";
import renderer from "react-test-renderer";
import SkillBlock from './index';
import resumeData from '../../resumeData';

it('renders correct skill block component', () => {
    const component = renderer.create(<SkillBlock skills={resumeData.skills} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
