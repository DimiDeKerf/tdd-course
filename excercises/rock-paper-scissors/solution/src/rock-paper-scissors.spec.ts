import { rockPaperScissors } from './rock-paper-scissors';

describe('Rock Paper Scissors', () => {
    it('returns "Player 1 wins!" if player 1 chooses paper and player 2 chooses rock', () => {
        expect(rockPaperScissors('paper', 'rock')).toBe('Player 1 wins!');
    });

    it('returns "Player 1 wins!" if player 1 chooses rock and player 2 chooses scissors', () => {
        expect(rockPaperScissors('rock', 'scissors')).toBe('Player 1 wins!');
    });

    it('returns "Player 1 wins!" if player 1 chooses scissors and player 2 chooses paper', () => {
        expect(rockPaperScissors('scissors', 'paper')).toBe('Player 1 wins!');
    });

    it('returns "Player 2 wins!" if player 1 chooses rock and player 2 chooses paper', () => {
        expect(rockPaperScissors('rock', 'paper')).toBe('Player 2 wins!');
    });

    it('returns "Player 2 wins!" if player 1 chooses scissors and player 2 chooses rock', () => {
        expect(rockPaperScissors('scissors', 'rock')).toBe('Player 2 wins!');
    });

    it('returns "Player 2 wins!" if player 1 chooses paper and player 2 chooses scissors', () => {
        expect(rockPaperScissors('paper', 'scissors')).toBe('Player 2 wins!');
    });

    it('returns "It is a tie!" when both players choose paper', () => {
        expect(rockPaperScissors('paper', 'paper')).toBe('It is a tie!');
    });
});
