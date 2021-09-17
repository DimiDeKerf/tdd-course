import { boldBuzz } from './bold-buzz';

describe('BoldBuzz', () => {
    it('returns 1 for 1', () => {
        expect(boldBuzz(1)).toBe('1');
    });

    it('returns 2 for 2', () => {
        expect(boldBuzz(2)).toBe('2');
    });

    it('returns Bold for 3', () => {
        expect(boldBuzz(3)).toBe('Bold');
    });

    it('returns Buzz for 5', () => {
        expect(boldBuzz(5)).toBe('Buzz');
    });

    it('returns Bold for 6', () => {
        expect(boldBuzz(6)).toBe('Bold');
    });

    it('returns Bold for 10', () => {
        expect(boldBuzz(10)).toBe('Buzz');
    });

    it('returns BoldBuzz for 15', () => {
        expect(boldBuzz(15)).toBe('BoldBuzz');
    });
});
