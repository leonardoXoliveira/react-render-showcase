import PropTypes from 'prop-types';
import { memo, useRef, useState } from 'react';
import { ChildComponent } from './ParentChildComponent';
import { RenderVisualizer } from './RenderVisualizer';

export function MemoizationComponent() {
  const [count, setCount] = useState(0);
  const [text] = useState("I won't re-render when count changes!");

  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div className="container">
      <h2>Memoization</h2>
      <p>
        The memoized child component won&apos;t re-render when the parent&apos;s
        count changes
      </p>

      <RenderVisualizer>
        <h4 className="subtitle">Parent Component</h4>
        <p>
          Count: <b>{count}</b>
        </p>
        <p>
          Render count: <b>{renderCount.current}</b>
        </p>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Update Parent
        </button>

        <ChildComponent count={count} renderCount={renderCount} />
        <MemoizedChildComponent text={text} />
      </RenderVisualizer>
    </div>
  );
}

function TextComponent({ text }) {
  return (
    <RenderVisualizer>
      <h4 className="subtitle">Memoized Child Component</h4>
      <p>{text}</p>
    </RenderVisualizer>
  );
}
TextComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

const MemoizedChildComponent = memo(TextComponent);
MemoizedChildComponent.displayName = 'MemoizedChildComponent';
