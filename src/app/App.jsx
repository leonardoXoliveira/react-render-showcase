import {
  ContextComponent,
  CounterComponent,
  ListComponent,
  MemoizationComponent,
  ParentChildComponent,
  TimerComponent,
} from '../components';
import {
  CounterChild,
  HookComponent,
  PureComponent,
  TitleComponent,
} from '../components/ContextComponent';
import './App.css';

function App() {
  return (
    <main>
      <h1>React Render Showcase</h1>
      <p className="description">
        Demonstrating how React rendering behaves across various scenarios
      </p>
      <p className="description">
        Watch components highlight in <b>Han Purple</b> when they re-render
      </p>

      <CounterComponent />

      <TimerComponent />

      <ParentChildComponent />

      <MemoizationComponent />

      <ContextComponent>
        <PureComponent />
        <CounterChild />
        <TitleComponent />
        <HookComponent />
      </ContextComponent>

      <ListComponent />
    </main>
  );
}

export default App;
