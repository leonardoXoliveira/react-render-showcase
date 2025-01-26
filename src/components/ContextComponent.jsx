import PropTypes from 'prop-types';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { RenderVisualizer } from './RenderVisualizer';

const CountContext = createContext(null);

ContextComponent.propTypes = {
  children: PropTypes.node.isRequired,
};
export function ContextComponent({ children }) {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('Title');
  const [uselessState, setUselessState] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setUselessState("I'm a useless state");
    }, 3000);
  }, [uselessState]);

  const value = useMemo(
    () => ({ count, setCount, title, setTitle }),
    [count, title]
  );

  return (
    <CountContext.Provider value={value}>
      <div className="container">
        <h2>Context Updates</h2>
        <p>Components re-render when context values change</p>

        <RenderVisualizer>
          <h4>Context Provider Component</h4>

          {children}
        </RenderVisualizer>
      </div>
    </CountContext.Provider>
  );
}

export function PureComponent() {
  return (
    <RenderVisualizer>
      <h4 className="subtitle">Pure Component</h4>
      <p>Does not re-render when context values changes</p>
    </RenderVisualizer>
  );
}

export function CounterChild() {
  const { count } = useContext(CountContext);

  return (
    <RenderVisualizer>
      <h4 className="subtitle">Counter Child Component</h4>
      <p>
        Count: <b>{count}</b>
      </p>
    </RenderVisualizer>
  );
}

export function TitleComponent() {
  const { title } = useContext(CountContext);

  return (
    <RenderVisualizer>
      <h4 className="subtitle">{title} Component</h4>
      <p>
        Even if the title value remains unchanged, a re-render will occur
        because two unrelated state values are being passed in the context
        provider&apos;s value prop. Whenever the value prop of the context
        provider changes, all child components that depend on the context will
        re-render, even if the change does not directly affect their relevant
        state or props. This is due to the way React handles context updates,
        which triggers a re-render for all consumers of that context, regardless
        of whether their subscribed values have actually changed. To avoid
        unnecessary re-renders, it&apos;s advisable to separating unrelated
        states into different context providers or using.
      </p>
      <p style={{ marginTop: 8 }}>
        Alternatively, for more complex applications, you may consider using a
        state management library such as Redux, Zustand, or Recoil. These
        libraries offer better control over state updates, enabling more
        granular re-rendering by allowing components to subscribe only to
        specific pieces of state. This can help prevent performance issues and
        reduce unnecessary re-renders.
      </p>
    </RenderVisualizer>
  );
}

function useCounter() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error('useCounter must be used within a CountProvider');
  }

  const { setCount } = context;

  const increment = useCallback(
    () => setCount((/** @type {number} */ prevCount) => prevCount + 1),
    [setCount]
  );
  const decrement = useCallback(
    () => setCount((/** @type {number} */ prevCount) => prevCount - 1),
    [setCount]
  );

  return {
    increment,
    decrement,
  };
}

export function HookComponent() {
  const { increment, decrement } = useCounter();

  return (
    <RenderVisualizer>
      <h4 className="subtitle">Hook Component</h4>
      <p>Uses custom hook to interact with context</p>

      <button onClick={increment} style={{ marginRight: 8 }}>
        Increment
      </button>
      <button onClick={decrement}>Decrement</button>
    </RenderVisualizer>
  );
}
