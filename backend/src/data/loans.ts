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

export const loans: LoanProduct[] = [
  {
    id: 1,
    lenderName: "Northstar Lending",
    productName: "Flex Personal Loan",
    minAmount: 5000,
    maxAmount: 50000,
    minApr: 7.99,
    maxApr: 24.99,
    minTermMonths: 24,
    maxTermMonths: 60,
  },
  {
    id: 2,
    lenderName: "Summit Financial",
    productName: "Personal Choice Loan",
    minAmount: 2500,
    maxAmount: 40000,
    minApr: 8.49,
    maxApr: 27.99,
    minTermMonths: 36,
    maxTermMonths: 72,
  },
  {
    id: 3,
    lenderName: "Riverbank Credit",
    productName: "Simple Personal Loan",
    minAmount: 1000,
    maxAmount: 30000,
    minApr: 9.25,
    maxApr: 29.5,
    minTermMonths: 12,
    maxTermMonths: 60,
  },
];