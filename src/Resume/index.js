import './index.css';
import Summary from '../Summary';
import Skills from '../Skills';

function Resume() {
  return (
    <div className="container" id="resume">
      <Summary />
      <Skills />
    </div>
  );
}

export default Resume;
