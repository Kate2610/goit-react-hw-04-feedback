import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total }) => {
  const positivePercentage = useMemo(() => {
    const result = total > 0 ? (good * 100) / total : 0;
    return Math.round(result);
  }, [good, total]);

  return (
    <>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total}</p>
      <p>Positive feedback:{positivePercentage} %</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Statistics;

