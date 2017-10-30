export const getColorClass = (color) => {
  switch (color) {
    case '1':
      return 'green';
    case '2':
      return 'light-green';
    case '4':
      return 'red';
    default:
      return '';
  }
};

export const getFlagClass = (country) => {
  switch (country) {
    case 'Италия':
      return 'flag-it';
    default:
      return '';
  }
};

export const prepareSeriesData = (seriesData) => {
  const { teams } = seriesData;
  const result = teams.map((team) => {
    const colorClass = getColorClass(team.color);
    const flagClass = getFlagClass(team.flag_country);
    return { ...team, colorClass, flagClass };
  });
  return { teams: result };
};
