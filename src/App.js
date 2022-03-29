import './App.css';
import Skills from './Skills';
import CaptionedIcon from './CaptionedIcon';

function App() {
  return (
    <div className="App">
      <Skills />
      <CaptionedIcon name="Azure" icon="/icons/dep-azure.svg" />
    </div>
  );
}

export default App;
