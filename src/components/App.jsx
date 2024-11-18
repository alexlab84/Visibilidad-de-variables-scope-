import '../styles/App.scss';
import ScopeDemo from './ScopeDemo'; 
import LoopScopeDemo from './LoopScopeDemo';
import NestedFunctionScope from './NestedFuntionScope';

function App() {
  return (
    <div>
      <h1>JavaScript Scope Demonstrations</h1>
      <ScopeDemo />
      <LoopScopeDemo />
      <NestedFunctionScope />
    </div>
  );
}

export default App;
