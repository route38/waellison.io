import React from "react";
import renderer from "react-test-renderer";
import EducationBlock from './index';
import resumeData from '../../resumeData';

it('renders correct footer component', () => {
    const component = renderer.create(<EducationBlock schools={resumeData.education} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
