import logo from './logo.svg';
import './App.css';
import  ContainerComponent  from './components/ContainerComponent';
import  CreateElementCompnent  from './components/CreateElementComponent';
import  PureComponent  from './components/PureComponent';
import  FunctionalComponent  from './components/FunctionalComponent';
function App() {
  return (
    <div className="App">
      <ContainerComponent text='Container Component'/>
      <CreateElementCompnent/>
      <PureComponent text='Pure Component'/>
      <FunctionalComponent text='Functional Component'/>
    </div>
  );
}

export default App;
