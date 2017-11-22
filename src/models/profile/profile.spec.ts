import { generateFullName } from "./profile";

describe('Profile', () => {
  describe('generateFullName', () => {
    it('should return concatenated first and last name', () => {
      const expected = "Alex Hoffman";

      const actual = generateFullName("Alex", "Hoffman");

      expect(actual).toEqual(expected);
    });
  });
});
