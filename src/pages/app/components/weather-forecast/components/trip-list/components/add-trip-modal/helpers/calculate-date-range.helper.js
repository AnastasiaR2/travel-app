const calculateDateRange = (numberOfDays) => {
  const currentDate = new Date();
  const futureDate = new Date(currentDate);
  futureDate.setDate(currentDate.getDate() + numberOfDays - 1);

  const minDate = currentDate.toISOString().split('T')[0];
  const maxDate = futureDate.toISOString().split('T')[0];

  return { minDate, maxDate };
};

export { calculateDateRange };
