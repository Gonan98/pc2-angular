export class Gasto {
    outcomeId: number;
    detail: string;
    amount: number;
    createdAt: string;

    constructor() {
        this.outcomeId = 0;
        this.detail = '';
        this.amount = 0;
        this.createdAt = '';
    }
}