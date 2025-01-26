import { useRef, useState } from 'react';
import { RenderVisualizer } from './RenderVisualizer';

export function CounterComponent() {
  const [count, setCount] = useState(0);

  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div className="container">
      <h2>Basic State Updates</h2>

      <RenderVisualizer>
        <p>
          Count: <b>{count}</b>
        </p>
        <p>
          Render count: <b>{renderCount.current}</b>
        </p>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Increment
        </button>
      </RenderVisualizer>
    </div>
  );
}
