const calculateRemainingTime = (startDate) => {
  const currentDate = new Date();
  const tripStartDate = new Date(startDate);
  let difference = tripStartDate - currentDate;

  if (difference < 0) {
    difference = 0;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

export { calculateRemainingTime };
