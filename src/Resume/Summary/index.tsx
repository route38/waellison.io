import React from "react";

interface IProps {
    text: string;
}

interface IState {

}

class Summary extends React.Component<IProps, IState> {
  render() {
    return (
      <div id="summary">
        <h1>William A. Ellison</h1>
        <h2>Summary</h2>
        <p dangerouslySetInnerHTML={{ __html: this.props.text }} />
      </div>
    );
  }
}

export default Summary;
