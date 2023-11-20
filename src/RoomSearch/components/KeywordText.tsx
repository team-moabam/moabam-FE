import React from 'react';

interface KeywordTextProps {
  keyword: string;
  content: string;
  className?: string;
}

const KeywordText = ({ keyword, content, className }: KeywordTextProps) => {
  const segments = content
    .split(new RegExp(`(${keyword})`, 'gi'))
    .filter(Boolean);

  return (
    <div className={className}>
      {segments.map((segment, i) => (
        <React.Fragment key={i}>
          {segment.toLowerCase() === keyword.toLowerCase() ? (
            <span
              className={`text-light-point dark:text-dark-point ${className}`}
            >
              {segment}
            </span>
          ) : (
            segment
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default KeywordText;
