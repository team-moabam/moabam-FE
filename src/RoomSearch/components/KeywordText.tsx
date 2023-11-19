import React from 'react';

interface KeywordTextProps {
  keyword: string;
  content: string;
}

const KeywordText = ({ keyword, content }: KeywordTextProps) => {
  const segments = content
    .split(new RegExp(`(${keyword})`, 'gi'))
    .filter(Boolean);

  return (
    <div>
      {segments.map((segment, i) => (
        <React.Fragment key={i}>
          {segment.toLowerCase() === keyword.toLowerCase() ? (
            <span className="text-light-point dark:text-dark-point">
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
