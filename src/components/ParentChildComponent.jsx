import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { RenderVisualizer } from './RenderVisualizer';

export function ParentChildComponent() {
  const [count, setCount] = useState(0);

  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div className="container">
      <h2>Parent -&gt; Child Re-Rendering </h2>

      <RenderVisualizer>
        <h4>Parent Component</h4>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Update Parent
        </button>
        <ChildComponent count={count} renderCount={renderCount} />
      </RenderVisualizer>
    </div>
  );
}

ChildComponent.propTypes = {
  count: PropTypes.number.isRequired,
  renderCount: PropTypes.shape({ current: PropTypes.number }).isRequired,
};
export function ChildComponent({ count, renderCount }) {
  return (
    <RenderVisualizer>
      <h4 className="subtitle">Child Component</h4>
      <p>
        Count: <b>{count}</b>
      </p>
      <p>
        Render count: <b>{renderCount.current}</b>
      </p>
    </RenderVisualizer>
  );
}
