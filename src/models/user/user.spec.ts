import { generateFullName } from "./user";

describe('User', () => {
  describe('generateFullName', () => {
    it('should return concatenated first and last name', () => {
      const expected = "Alex Hoffman";

      const actual = generateFullName("Alex", "Hoffman");

      expect(actual).toEqual(expected);
    });
  });
});
