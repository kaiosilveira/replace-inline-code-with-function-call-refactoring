import { appliesToMass } from '.';

describe('appliesToMass', () => {
  it('should return true if Massachussets is in the list of states', () => {
    expect(appliesToMass(['MA', 'NH', 'ME'])).toBe(true);
  });

  it('should return true if Massachussets is not in the list of states', () => {
    expect(appliesToMass(['NH', 'ME'])).toBe(false);
  });
});
