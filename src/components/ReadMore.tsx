import { useState } from 'react';

type ReadMoreProps = {
  title: string;
  overview: string;
  numOfWords: number;
};

const ReadMore = ({ title, overview, numOfWords = 30 }: ReadMoreProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const textArr = overview.split(' ');
  const needToHideWords = textArr.length > numOfWords;
  const lessWords = textArr.slice(0, numOfWords).join(' ');
  const restOfWords = textArr.slice(numOfWords).join(' ');

  return (
    <p>
      {lessWords}
      {needToHideWords && (
        <>
          {!isExpanded && <span aria-hidden="true">...</span>}
          <span
            aria-hidden={isExpanded}
            aria-live="polite"
            className={isExpanded ? '' : 'hidden'}
          >
            {' '}
            {restOfWords}
          </span>
          <button
            className="font-bold cursor-pointer"
            aria-expanded={isExpanded}
            aria-controls={`more text - ${title}`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? '- Read Less' : 'Read More'}
          </button>
        </>
      )}
    </p>
  );
};

export default ReadMore;
