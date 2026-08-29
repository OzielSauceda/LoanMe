export type LoanProduct = {
  id: number;
  lenderName: string;
  productName: string;
  minAmount: number;
  maxAmount: number;
  minApr: number;
  maxApr: number;
  minTermMonths: number;
  maxTermMonths: number;
};
