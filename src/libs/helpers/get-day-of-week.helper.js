const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const getDayOfWeek = (dateString) => {
  const date = new Date(dateString);
  const dayOfWeek = daysOfWeek[date.getDay()];
  return dayOfWeek;
};

export { getDayOfWeek };
