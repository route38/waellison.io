import './index.css';
import Summary from '../Summary';
import SkillBlock from './SkillBlock';

function Resume() {
  return (
    <div className="container" id="resume">
      <Summary />
      <SkillBlock />
    </div>
  );
}

export default Resume;
