export function rockPaperScissors(player1: string, player2: string): string {
    if (player1 === player2) {
        return 'It is a tie!';
    }
    if (player2Rules.includes(`${player1}${player2}`)) {
        return 'Player 2 wins!';
    } else {
        return 'Player 1 wins!';
    }
}

const player2Rules = 'rockpaperscissorsrock';