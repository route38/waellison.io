import React from "react";
import renderer from "react-test-renderer";
import CaptionedIcon from "./index";

describe("rendering of correct captioned icons", () => {
    it("renders correct icon for flask", () => {
        const component = renderer.create(<CaptionedIcon icon="flask"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for python", () => {
        const component = renderer.create(<CaptionedIcon icon="python"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for learning", () => {
        const component = renderer.create(<CaptionedIcon icon="learning"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for css", () => {
        const component = renderer.create(<CaptionedIcon icon="css"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for docker", () => {
        const component = renderer.create(<CaptionedIcon icon="docker"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for access", () => {
        const component = renderer.create(<CaptionedIcon icon="access"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for googleCloud", () => {
        const component = renderer.create(<CaptionedIcon icon="googleCloud"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for outlook", () => {
        const component = renderer.create(<CaptionedIcon icon="outlook"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for kubernetes", () => {
        const component = renderer.create(<CaptionedIcon icon="kubernetes"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for ruby", () => {
        const component = renderer.create(<CaptionedIcon icon="ruby"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for softwareDevelopment", () => {
        const component = renderer.create(<CaptionedIcon icon="softwareDevelopment"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for teamwork", () => {
        const component = renderer.create(<CaptionedIcon icon="teamwork"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for word", () => {
        const component = renderer.create(<CaptionedIcon icon="word"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for postgreSQL", () => {
        const component = renderer.create(<CaptionedIcon icon="postgreSQL"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for vsCode", () => {
        const component = renderer.create(<CaptionedIcon icon="vsCode"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for django", () => {
        const component = renderer.create(<CaptionedIcon icon="django"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for restApi", () => {
        const component = renderer.create(<CaptionedIcon icon="restApi"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for linux", () => {
        const component = renderer.create(<CaptionedIcon icon="linux"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for problemSolving", () => {
        const component = renderer.create(<CaptionedIcon icon="problemSolving"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for excel", () => {
        const component = renderer.create(<CaptionedIcon icon="excel"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for swahili", () => {
        const component = renderer.create(<CaptionedIcon icon="swahili"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for english", () => {
        const component = renderer.create(<CaptionedIcon icon="english"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for timeManagement", () => {
        const component = renderer.create(<CaptionedIcon icon="timeManagement"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for javaScript", () => {
        const component = renderer.create(<CaptionedIcon icon="javaScript"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for windows", () => {
        const component = renderer.create(<CaptionedIcon icon="windows"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for dependability", () => {
        const component = renderer.create(<CaptionedIcon icon="dependability"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for german", () => {
        const component = renderer.create(<CaptionedIcon icon="german"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for medicalCoding", () => {
        const component = renderer.create(<CaptionedIcon icon="medicalCoding"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for jQuery", () => {
        const component = renderer.create(<CaptionedIcon icon="jQuery"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for reactjs", () => {
        const component = renderer.create(<CaptionedIcon icon="reactjs"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for spanish", () => {
        const component = renderer.create(<CaptionedIcon icon="spanish"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for html", () => {
        const component = renderer.create(<CaptionedIcon icon="html"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for aws", () => {
        const component = renderer.create(<CaptionedIcon icon="aws"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for devops", () => {
        const component = renderer.create(<CaptionedIcon icon="devops"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for telecommuting", () => {
        const component = renderer.create(<CaptionedIcon icon="telecommuting"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for azure", () => {
        const component = renderer.create(<CaptionedIcon icon="azure"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for cee", () => {
        const component = renderer.create(<CaptionedIcon icon="cee"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for writing", () => {
        const component = renderer.create(<CaptionedIcon icon="writing"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for sinatra", () => {
        const component = renderer.create(<CaptionedIcon icon="sinatra"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for ceePlusPlus", () => {
        const component = renderer.create(<CaptionedIcon icon="ceePlusPlus"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for french", () => {
        const component = renderer.create(<CaptionedIcon icon="french"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for git", () => {
        const component = renderer.create(<CaptionedIcon icon="git"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for continuousIntegration", () => {
        const component = renderer.create(<CaptionedIcon icon="continuousIntegration"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correct icon for macOS", () => {
        const component = renderer.create(<CaptionedIcon icon="macOS"/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
