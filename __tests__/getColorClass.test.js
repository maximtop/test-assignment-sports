import { getColorClass } from '../src/helpers/prepareSeriesData';

describe('getColorClass', () => {
  it('returns green if input = 1', () => {
    expect(getColorClass('1')).toBe('green');
  });
  it('returns light-green if input = 2', () => {
    expect(getColorClass('2')).toBe('light-green');
  });
  it('returns red if input = 4', () => {
    expect(getColorClass('4')).toBe('red');
  });
  it('returns empty string', () => {
    expect(getColorClass('')).toBe('');
  });
  it('returns empty string for other data', () => {
    expect(getColorClass('5')).toBe('');
  });
})