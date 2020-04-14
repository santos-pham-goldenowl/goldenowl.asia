import React, { useState, useEffect } from 'react';
import './index.sass';

const ReadingProgress = ({ target }) => {
  const [readingProgress, setReadingProgress] = useState(0);

  const scrollListener = () => {
    if (!target.current) {
      return;
    }

    const element = target.current;
    const totalHeight = element.clientHeight - element.offsetTop - window.innerHeight;
    const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (windowScrollTop === 0) {
      setReadingProgress(0);
      return;
    }

    if (windowScrollTop > totalHeight) {
      setReadingProgress(100);
      return;
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  });

  return (
    <>
      <div
        className="reading-progress-bar"
        style={{ width: `${readingProgress}%` }}
      />
    </>
  );
};

export default ReadingProgress;
