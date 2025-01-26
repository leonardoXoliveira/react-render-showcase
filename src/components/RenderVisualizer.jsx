import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

RenderVisualizer.propTypes = {
  children: PropTypes.node.isRequired,
};
export function RenderVisualizer({ children }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.remove('highlight');

      void sectionRef.current.offsetWidth;

      sectionRef.current.classList.add('highlight');
    }
  });

  return <section ref={sectionRef}>{children}</section>;
}
