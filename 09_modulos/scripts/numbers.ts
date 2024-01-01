export const n1: number = 1;
export const n2: number = 2;
export const n3: number = 3;
export const n4: number = 4;
export const n5: number = 5;
export const n6: number = 6;
export const n7: number = 7;
export const n8: number = 8;
export const n9: number = 9;
export const n10: number = 10;

export function somaNum(...valores: number[]) : number {
    return valores.reduce((item, total) => item + total);
}