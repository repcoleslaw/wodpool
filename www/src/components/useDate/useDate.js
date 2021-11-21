import React from 'react';

const useDate = () => {
  const [date, setDate] = React.useState(
    new Date().toISOString(),
  );

  // prevents rerenders this way
  return date;
};

export default useDate;
