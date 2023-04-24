import { checkForURL } from '../src/client/js/urlChecker';

describe('checkForURL', () => {
    test('returns true for a valid URL', () => {
      expect(checkForURL('https://www.example.com')).toBe(true);
    });
  
    test('returns false for an invalid URL', () => {
      expect(checkForURL('not a valid URL')).toBe(false);
    });
  });