export function boldBuzz(value: number): string {
    if (isDivisbleByThree(value) && isDivisbleByFive(value)) {
        return 'BoldBuzz';
    } else if (isDivisbleByThree(value)) {
        return 'Bold';
    } else if (isDivisbleByFive(value)) {
        return 'Buzz';
    }
    return `${value}`;
}

function isDivisbleByThree(value: number): boolean {
    return value % 3 === 0;
}

function isDivisbleByFive(value: number): boolean {
    return value % 5 === 0;
}
