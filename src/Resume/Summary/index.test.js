import React from "react";
import renderer from "react-test-renderer";
import Summary from './index';

it('renders correct summary component', () => {
    const component = renderer.create(<Summary text="This is the summary." />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
