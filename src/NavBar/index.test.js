import React from "react";
import renderer from "react-test-renderer";
import NavBar from './index';

it('renders correct navbar component', () => {
    const component = renderer.create(<NavBar />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
