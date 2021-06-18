import logo from './logo.svg';
import './App.css';
import MyComponent  from './components/Greet';
import Greet  from './components/Greet';
import ClassComponent from './components/ClassComponent';
import JsxExample from './components/JsxExample';
import PropsEx from './components/ProspEx';
import StateEX from './components/StateEx';
import CounterStateEx from './components/CounterStateEx';
import DestructuringProps from './components/DestructuringProps'
import DestructuringPropsClass from './components/DestructuringPropsClass'

function App() {
  return (
    <div className="App">
      <MyComponent />
      <Greet />
      <ClassComponent name='Sujeet'heroName='SuperMan'/>
      <JsxExample />
      <PropsEx name='Sujeet' heroName='BatMan'>
        <button>Button</button></PropsEx>
      <PropsEx name='Kumar'heroName='SuperMan'>
        <p>This is a children element</p>
      </PropsEx>
      <StateEX />
      <CounterStateEx />
      <DestructuringProps name='Kumar'heroName='SuperMan'/>
      <DestructuringPropsClass name='Sujeet' heroName='BatMan' />
    </div>
  );
}

export default App;
