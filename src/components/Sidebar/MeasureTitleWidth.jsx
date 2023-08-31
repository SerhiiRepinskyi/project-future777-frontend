import React, { useRef, useEffect } from 'react';

const MeasureTitleWidth = ({ title, setTitleWidth }) => {
  const measureRef = useRef(null);

  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        if (entry.target === measureRef.current) {
          setTitleWidth(entry.contentRect.width);
        }
      }
    });

    const currentRef = measureRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [setTitleWidth]);

  return (
    <span
      ref={measureRef}
      style={{
        position: 'absolute',
        top: '-9999px',
        left: '-9999px',
        visibility: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      {title}
    </span>
  );
};

export default MeasureTitleWidth;
