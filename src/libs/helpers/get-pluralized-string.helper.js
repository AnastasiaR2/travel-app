const getPluralizedString = (value, string) => {
  return value === 1 ? string : `${string}s`;
};

export { getPluralizedString };
