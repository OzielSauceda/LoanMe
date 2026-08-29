import type { LoanProduct } from "../types/loan";

type LoanCardProps = {
  loan: LoanProduct;
};

function LoanCard({ loan }: LoanCardProps) {
  return (
    <article>
      <h3>{loan.lenderName}</h3>
      <p>{loan.productName}</p>

      <p>
        APR: {loan.minApr}% – {loan.maxApr}%
      </p>

      <p>
        Amount: ${loan.minAmount.toLocaleString()} – $
        {loan.maxAmount.toLocaleString()}
      </p>

      <p>
        Term: {loan.minTermMonths} – {loan.maxTermMonths} months
      </p>
    </article>
  );
}

export default LoanCard;
