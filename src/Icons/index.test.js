import React from "react";
import renderer from "react-test-renderer";
import CaptionedIcon from "./index";

describe("rendering of correct captioned icons", () => {
    it("renders correct icon for flask", () => {
        const component = renderer.create(<CaptionedIcon name="flask"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for python", () => {
        const component = renderer.create(<CaptionedIcon name="python"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for learning", () => {
        const component = renderer.create(<CaptionedIcon name="learning"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for css", () => {
        const component = renderer.create(<CaptionedIcon name="css"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for docker", () => {
        const component = renderer.create(<CaptionedIcon name="docker"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for access", () => {
        const component = renderer.create(<CaptionedIcon name="access"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for googleCloud", () => {
        const component = renderer.create(<CaptionedIcon name="googleCloud"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for outlook", () => {
        const component = renderer.create(<CaptionedIcon name="outlook"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for kubernetes", () => {
        const component = renderer.create(<CaptionedIcon name="kubernetes"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for ruby", () => {
        const component = renderer.create(<CaptionedIcon name="ruby"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for softwareDevelopment", () => {
        const component = renderer.create(<CaptionedIcon name="softwareDevelopment"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for teamwork", () => {
        const component = renderer.create(<CaptionedIcon name="teamwork"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for word", () => {
        const component = renderer.create(<CaptionedIcon name="word"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for postgreSQL", () => {
        const component = renderer.create(<CaptionedIcon name="postgreSQL"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for vsCode", () => {
        const component = renderer.create(<CaptionedIcon name="vsCode"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for django", () => {
        const component = renderer.create(<CaptionedIcon name="django"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for restApi", () => {
        const component = renderer.create(<CaptionedIcon name="restApi"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for linux", () => {
        const component = renderer.create(<CaptionedIcon name="linux"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for problemSolving", () => {
        const component = renderer.create(<CaptionedIcon name="problemSolving"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for excel", () => {
        const component = renderer.create(<CaptionedIcon name="excel"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for swahili", () => {
        const component = renderer.create(<CaptionedIcon name="swahili"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for english", () => {
        const component = renderer.create(<CaptionedIcon name="english"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for timeManagement", () => {
        const component = renderer.create(<CaptionedIcon name="timeManagement"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for javaScript", () => {
        const component = renderer.create(<CaptionedIcon name="javaScript"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for windows", () => {
        const component = renderer.create(<CaptionedIcon name="windows"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for dependability", () => {
        const component = renderer.create(<CaptionedIcon name="dependability"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for german", () => {
        const component = renderer.create(<CaptionedIcon name="german"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for medicalCoding", () => {
        const component = renderer.create(<CaptionedIcon name="medicalCoding"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for jQuery", () => {
        const component = renderer.create(<CaptionedIcon name="jQuery"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for reactjs", () => {
        const component = renderer.create(<CaptionedIcon name="reactjs"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for spanish", () => {
        const component = renderer.create(<CaptionedIcon name="spanish"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for html", () => {
        const component = renderer.create(<CaptionedIcon name="html"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for aws", () => {
        const component = renderer.create(<CaptionedIcon name="aws"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for devops", () => {
        const component = renderer.create(<CaptionedIcon name="devops"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for telecommuting", () => {
        const component = renderer.create(<CaptionedIcon name="telecommuting"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for azure", () => {
        const component = renderer.create(<CaptionedIcon name="azure"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for cee", () => {
        const component = renderer.create(<CaptionedIcon name="cee"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for writing", () => {
        const component = renderer.create(<CaptionedIcon name="writing"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for sinatra", () => {
        const component = renderer.create(<CaptionedIcon name="sinatra"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for ceePlusPlus", () => {
        const component = renderer.create(<CaptionedIcon name="ceePlusPlus"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for french", () => {
        const component = renderer.create(<CaptionedIcon name="french"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for git", () => {
        const component = renderer.create(<CaptionedIcon name="git"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for continuousIntegration", () => {
        const component = renderer.create(<CaptionedIcon name="continuousIntegration"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for macOS", () => {
        const component = renderer.create(<CaptionedIcon name="macOS"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
