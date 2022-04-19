import React from "react";
import renderer from "react-test-renderer";
import School from './index';
import resumeData from '../../../resumeData';

it('renders correct school component', () => {
    const aSchool = resumeData.education.fcc;
    const component = renderer.create(<School {...aSchool} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
