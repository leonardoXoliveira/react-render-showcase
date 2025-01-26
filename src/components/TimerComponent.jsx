import { useEffect, useRef, useState } from 'react';
import { RenderVisualizer } from './RenderVisualizer';

export function TimerComponent() {
  const [timer, setTimer] = useState(100);

  const renderCount = useRef(0);
  renderCount.current += 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevCount) => prevCount - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="container">
      <h2>Timer (Updates Every Second)</h2>

      <RenderVisualizer>
        <p>
          Timer: <b>{timer}</b>
        </p>
        <p>
          Render count: <b>{renderCount.current}</b>
        </p>
      </RenderVisualizer>
    </div>
  );
}
